import { v4 as uuid } from 'uuid';

import {
    PaymentStatus
} from '../../generated/prisma';

import {
    publishEvent,
    EXCHANGES,
    QUEUES,
} from '@shared/common';

import {
    createPayment,
    findPaymentByIdempotencyKey,
    updatePaymentStatus,
    getPaymentsByUserId
} from '@repositories/payment.repository';

export const createPaymentService = async (
    userId: string,
    data: {
        orderId: string;
        amount: number;
        currency: string;
        paymentProvider: string;
        idempotencyKey: string;
    }
) => {

    const existingPayment =
        await findPaymentByIdempotencyKey(
            data.idempotencyKey
        );

    if (existingPayment) {
        return existingPayment;
    }

    const transactionId = uuid();

    const payment =
        await createPayment({
            orderId: data.orderId,
            userId,
            amount: data.amount,
            currency: data.currency,
            paymentProvider: data.paymentProvider,
            transactionId,
            idempotencyKey: data.idempotencyKey,
            status: PaymentStatus.PROCESSING
        });

    const isPaymentSuccessful = Math.random() > 0.2;

    const finalStatus = isPaymentSuccessful ? PaymentStatus.SUCCESS : PaymentStatus.FAILED;

    const updatedPayment =
        await updatePaymentStatus(
            payment.id,
            finalStatus
        );

    if (finalStatus === PaymentStatus.SUCCESS) {
        await publishEvent(
            EXCHANGES.PAYMENT_EVENTS,
            '',
            {
                event: QUEUES.PAYMENT_SUCCESS,
                paymentId: updatedPayment.id,
                orderId: updatedPayment.orderId,
                amount: updatedPayment.amount,
                userId,
                createdAt: new Date()
            }
        );
    }

    return updatedPayment;
};

export const getUserPaymentsService = async (
    userId: string
) => {

    return getPaymentsByUserId(userId);
};