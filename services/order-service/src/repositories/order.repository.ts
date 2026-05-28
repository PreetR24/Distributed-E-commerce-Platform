import { prisma } from '@config/prisma';

import { OrderStatus } from '../../generated/prisma';

export const createOrder = async (
    userId: string,
    items: any[],
    totalAmount: number
) => {

    return prisma.order.create({
        data: {
            userId,
            totalAmount,
            orderItems: {
                create: items.map((item) => ({
                    productId: item.productId,
                    productName: item.productName,
                    productPrice: item.productPrice,
                    quantity: item.quantity,
                    subtotal:
                        item.productPrice *
                        item.quantity
                }))
            }
        },
        include: {
            orderItems: true
        }
    });
};

export const getOrders = async (
    userId: string
) => {

    return prisma.order.findMany({
        where: {
            userId
        },
        include: {
            orderItems: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
};

export const getOrderById = async (
    orderId: string
) => {

    return prisma.order.findUnique({
        where: {
            id: orderId
        },
        include: {
            orderItems: true
        }
    });
};

export const updateOrderStatus = async (
    orderId: string,
    status: OrderStatus
) => {

    return prisma.order.update({
        where: {
            id: orderId
        },
        data: {
            status
        }
    });
};