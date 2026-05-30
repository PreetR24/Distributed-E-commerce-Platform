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

import { OrderStatus }
from '../../generated/prisma';

export const createOrderService = async (
    userId: string,
    items: any[]
) => {

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

    const totalAmount =
        items.reduce(
            (total, item) =>
                total +
                (item.productPrice * item.quantity),
            0
        );

    const order =
        await createOrder(
            userId,
            items,
            totalAmount
        );

    await publishEvent(
        EXCHANGES.ORDER_EVENTS,
        QUEUES.ORDER_CREATED,
        {
            event:QUEUES.ORDER_CREATED,
            orderId:order.id,
            userId,
            totalAmount,
            items,
            createdAt:new Date()
        }
    );

    logger.info(
        `Order Created: ${order.id}`,
    );

    return order;
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

    await updateOrderStatus(
        orderId,
        status
    );

    logger.info(
        `Order Status Updated: ${orderId} -> ${status}`,
    );

    return getOrderById(orderId);
};