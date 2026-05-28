import { prisma } from '@config/prisma';

import {
    PaymentStatus
} from '../../generated/prisma';

export const findPaymentByIdempotencyKey = async (
    idempotencyKey: string
) => {

    return prisma.payment.findUnique({
        where: {
            idempotencyKey
        }
    });
};

export const createPayment = async (
    data: {
        orderId: string;
        userId: string;
        amount: number;
        currency: string;
        paymentProvider: string;
        transactionId: string;
        idempotencyKey: string;
        status: PaymentStatus;
    }
) => {

    return prisma.payment.create({
        data
    });
};

export const updatePaymentStatus = async (
    paymentId: string,
    status: PaymentStatus
) => {

    return prisma.payment.update({
        where: {
            id: paymentId
        },
        data: {
            status
        }
    });
};

export const getPaymentsByUserId = async (
    userId: string
) => {

    return prisma.payment.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
};