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

export const createInventoryStock =
async (
    data: {
        productId: string;
        availableStock: number;
    }
) => {
    return prisma.inventory.create({
        data: {
            productId: data.productId,
            availableStock: data.availableStock
        }
    });
};

export const getAllInventory =
async () => {
    return prisma.inventory.findMany();
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

export const getReservationsByOrderId =
async (
    orderId: string
) => {

    return prisma.stockReservation.findMany({
        where: {
            orderId,
            status: 'RESERVED'
        }
    });
};

export const updateReservationStatus =
async (
    reservationId: string,
    status: 'RELEASED' | 'COMPLETED'
) => {

    return prisma.stockReservation.update({
        where: {
            id: reservationId
        },
        data: {
            status
        }
    });
};