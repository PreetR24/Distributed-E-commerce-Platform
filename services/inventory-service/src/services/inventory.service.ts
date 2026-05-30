import {
    getInventoryByProductId,
    createReservation,
    updateInventoryStock,
    getReservationsByOrderId,
    updateReservationStatus
} from '@repositories/inventory.repository';

import { AppError }
from '@shared/common';

import {
    publishEvent,
    EXCHANGES,
    QUEUES,
    logger
} from '@shared/common';

export const reserveInventoryService =
async (
    orderId: string,
    items: {
        productId: string;
        quantity: number;
    }[]
) => {

    for (const item of items) {

        const inventory =
            await getInventoryByProductId(
                item.productId
            );

        if (!inventory) {
            logger.error(
                `Inventory not found for Product ${item.productId}`
            );

            throw new AppError(
                'INVENTORY_NOT_FOUND',
                404,
                `Inventory missing for ${item.productId}`
            );
        }

        if (
            inventory.availableStock <
            item.quantity
        ) {

            await publishEvent(
                EXCHANGES.ORDER_EVENTS,
                '',
                {
                    event:
                        QUEUES
                            .INVENTORY_RESERVATION_FAILED,

                    orderId,

                    productId:
                        item.productId,

                    quantity:
                        item.quantity,

                    reason:
                        'OUT_OF_STOCK',

                    createdAt:
                        new Date()
                }
            );

            logger.warn(
                `Out of stock for Product ${item.productId}: Requested ${item.quantity}, Available ${inventory.availableStock}`
            );

            throw new AppError(
                'OUT_OF_STOCK',
                400,
                `${item.productId} is out of stock`
            );
        }

        const updatedAvailableStock =
            inventory.availableStock -
            item.quantity;

        const updatedReservedStock =
            inventory.reservedStock +
            item.quantity;

        await updateInventoryStock(
            inventory.id,
            updatedAvailableStock,
            updatedReservedStock
        );

        await createReservation({
            orderId,
            productId: item.productId,
            quantity: item.quantity,
            expiresAt: new Date(
                Date.now() +
                15 * 60 * 1000
            )
        });

        logger.info(
            `Inventory Reserved: Order ${orderId}, Product ${item.productId}, Quantity ${item.quantity}`
        );
    }
};

export const releaseInventoryReservationService =
async (
    orderId: string
) => {

    const reservations =
        await getReservationsByOrderId(
            orderId
        );

    for (
        const reservation
        of reservations
    ) {

        const inventory =
            await getInventoryByProductId(
                reservation.productId
            );

        if (!inventory) {
            continue;
        }

        const updatedAvailableStock =
            inventory.availableStock +
            reservation.quantity;

        const updatedReservedStock =
            inventory.reservedStock -
            reservation.quantity;

        await updateInventoryStock(
            inventory.id,
            updatedAvailableStock,
            updatedReservedStock
        );

        await updateReservationStatus(
            reservation.id,
            'RELEASED'
        );

        logger.info(
            `Inventory Released: Order ${orderId}, Product ${reservation.productId}, Quantity ${reservation.quantity}`
        );
    }
};