import { prisma }
from '@config/prisma';

import { StockReservationStatus } from '@shared/common';

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

export const addInventoryStock =
async (
    productId: string,
    quantity: number
) => {

    return prisma.inventory.update({

        where: {
            productId
        },

        data: {

            availableStock: {

                increment: quantity

            }

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
            status: StockReservationStatus.RESERVED
        }
    });
};

export const updateReservationStatus =
async (
    reservationId: string,
    status: StockReservationStatus.RELEASED | StockReservationStatus.COMPLETED
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