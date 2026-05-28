import {
    getInventoryByProductId,
    createReservation,
    updateInventoryStock
} from '@repositories/inventory.repository';

import { AppError }
from '@shared/common';

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
    }
};