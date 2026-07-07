import {
    createOrder,
    getOrders,
    getOrderById,
    updateOrderStatus
} from '@repositories/order.repository';

import {
    AppError,
    publishEvent,
    EXCHANGES,
    QUEUES,
    logger
} from '@shared/common';

import {
    getProductByIdWithRetry
}
from '../grpc/product.grpc.service';

import {
    checkInventory
} from '../grpc/inventory.grpc.service'

import {
    orderStatusCounter,
    orderProcessingDuration
}
from '@shared/common/metrics';

import { OrderStatus }
from '../../generated/prisma';

export const createOrderService = async (
    userId: string,
    requestId: string,
    items: any[]
) => {
    const endTimer = orderProcessingDuration.startTimer();

    try{

        if (!items.length) {

            logger.error(
                'Attempt to create empty order'
            );

            throw new AppError(
                'EMPTY_ORDER',
                400,
                'Order must contain items'
            );
        }

        let totalAmount = 0;

        const enrichedItems = [];

        let product;

        for (const item of items) {

            try{

                product =
                    await getProductByIdWithRetry(
                        item.productId
                    );

                if (!product) {

                    throw new AppError(
                        'PRODUCT_NOT_FOUND',
                        404,
                        `Product ${item.productId} not found`
                    );
                }

                if (!product.isActive) {

                    throw new AppError(
                        'PRODUCT_INACTIVE',
                        400,
                        `Product ${item.productId} is inactive`
                    );
                }

                const inventory =
                    await checkInventory(
                        item.productId,
                        item.quantity
                    );

                if (!inventory.available) {

                    throw new AppError(
                        'OUT_OF_STOCK',
                        400,
                        `Available stock: ${inventory.availableStock}`
                    );
                }

                totalAmount +=
                    product.price *
                    item.quantity;

                enrichedItems.push({
                    productId: product.id,
                    productName: product.name,
                    productPrice: product.price,
                    quantity: item.quantity
                });
            } 
            
            catch (error: any) {
            
                throw new AppError(
                    "PRODUCT_SERVICE_ERROR",
                    500,
                    "Unable to fetch product details"
                );
            }
        }

        const order =
            await createOrder(
                userId,
                enrichedItems,
                totalAmount
            );

        await publishEvent(
            EXCHANGES.ORDER_EVENTS,
            QUEUES.ORDER_CREATED,
            {
                event: QUEUES.ORDER_CREATED,
                orderId: order.id,
                userId,
                requestId,
                totalAmount,
                items: enrichedItems,
                createdAt: new Date()
            }
        );

        orderStatusCounter.inc({status: OrderStatus.PENDING});

        logger.info({
            event: 'ORDER_CREATED',
            orderId: order.id,
            userId,
            totalAmount
        });

        return order;

    } catch (error) {

        orderStatusCounter.inc({status: OrderStatus.FAILED});

        throw error;

    }
    finally {

        endTimer();

    }
};

export const getOrdersService = async (
    userId: string
) => {

    return getOrders(userId);
};

export const getSingleOrderService = async (
    orderId: string
) => {

    const order =
        await getOrderById(orderId);

    if (!order) {
        logger.error(
            `Order not found: ${orderId}`
        );
        throw new AppError(
            'ORDER_NOT_FOUND',
            404,
            'Order not found'
        );
    }

    return order;
};

export const updateOrderStatusService = async (
    orderId: string,
    status: OrderStatus
) => {

    const order =
        await getOrderById(orderId);

    if (!order) {

        throw new AppError(
            "ORDER_NOT_FOUND",
            404,
            "Order not found"
        );
    }

    if (order.status === status) {

        throw new AppError(
            "ORDER_ALREADY_IN_STATUS",
            409,
            `Order is already ${status}`
        );
    }

    const allowedTransitions: Record<
        OrderStatus,
        OrderStatus[]
    > = {

        [OrderStatus.PENDING]: [
            OrderStatus.CONFIRMED,
            OrderStatus.CANCELLED,
            OrderStatus.FAILED
        ],

        [OrderStatus.CONFIRMED]: [
            OrderStatus.SHIPPED,
            OrderStatus.CANCELLED
        ],

        [OrderStatus.SHIPPED]: [
            OrderStatus.DELIVERED
        ],

        [OrderStatus.DELIVERED]: [],

        [OrderStatus.CANCELLED]: [],

        [OrderStatus.FAILED]: []
    };

    const allowedStatuses =
        allowedTransitions[order.status];

    if (
        !allowedStatuses.includes(status)
    ) {

        throw new AppError(
            "INVALID_ORDER_STATUS_TRANSITION",
            400,
            `Cannot change order status from ${order.status} to ${status}`
        );
    }

    await updateOrderStatus(
        orderId,
        status
    );

    orderStatusCounter.inc({

        status

    });

    logger.info({

        event: "ORDER_UPDATED",

        orderId,

        status

    });

    return getOrderById(
        orderId
    );

};