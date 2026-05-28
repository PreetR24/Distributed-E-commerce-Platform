import { prisma }
from '@config/prisma';

export const getInventoryByProductId =
async (
    productId: string
) => {

    return prisma.inventory.findUnique({
        where: {
            productId
        }
    });
};

export const createReservation =
async (
    data: {
        orderId: string;
        productId: string;
        quantity: number;
        expiresAt: Date;
    }
) => {

    return prisma.stockReservation.create({
        data
    });
};

export const updateInventoryStock =
async (
    inventoryId: string,
    availableStock: number,
    reservedStock: number
) => {

    return prisma.inventory.update({
        where: {
            id: inventoryId
        },
        data: {
            availableStock,
            reservedStock
        }
    });
};