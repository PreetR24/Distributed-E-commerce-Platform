import { v4 as uuid } from 'uuid';

import {
    PaymentStatus
} from '../../generated/prisma';

import {
    publishEvent,
    EXCHANGES,
    QUEUES,
    logger,
    AppError
} from '@shared/common';

import {
    createPayment,
    findPaymentByIdempotencyKey,
    updatePaymentStatus,
    getPaymentsByUserId,
    findSuccessfulPaymentByOrderId
} from '@repositories/payment.repository';

import {
    paymentsSuccessCounter,
    paymentsFailedCounter
}
from '@shared/common';

import {
    getOrderById
} from '@grpc/order.grpc.service';

export const createPaymentService = async (
    userId: string,
    requestId: string,
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

    const successfulPayment =
        await findSuccessfulPaymentByOrderId(
            data.orderId
        );

    if (successfulPayment) {

        throw new AppError(
            'ORDER_ALREADY_PAID',
            400,
            'Payment already completed for this order'
        );
    }

    const order =
        await getOrderById(
            data.orderId
        );

    if (!order) {
        throw new AppError(
            'ORDER_NOT_FOUND',
            404,
            'Order not found'
        );
    }

    if ( order.status === 'CANCELLED' ) {

        throw new AppError(
            'ORDER_CANCELLED',
            400,
            'Cannot pay for a cancelled order'
        );
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

    if (
        finalStatus ===
        PaymentStatus.SUCCESS
    ) {

        await publishEvent(
            EXCHANGES.PAYMENT_EVENTS,
            QUEUES.PAYMENT_SUCCESS,
            {
                event:
                    QUEUES.PAYMENT_SUCCESS,

                paymentId:
                    updatedPayment.id,

                orderId:
                    updatedPayment.orderId,

                amount:
                    updatedPayment.amount,

                userId,
                requestId,

                createdAt:
                    new Date()
            }
        );

        paymentsSuccessCounter.inc();

        logger.info({
            event: 'PAYMENT_SUCCESS',
            paymentId: updatedPayment.id,
            orderId: updatedPayment.orderId,
            amount: updatedPayment.amount
        });
    }
    else {

        await publishEvent(
            EXCHANGES.PAYMENT_EVENTS,
            QUEUES.PAYMENT_FAILED,
            {
                event:
                    QUEUES.PAYMENT_FAILED,

                paymentId:
                    updatedPayment.id,

                orderId:
                    updatedPayment.orderId,

                amount:
                    updatedPayment.amount,

                userId,
                requestId,

                createdAt:
                    new Date()
            }
        );

        paymentsFailedCounter.inc();

        logger.info({
            event: 'PAYMENT_FAILED',
            paymentId: updatedPayment.id,
            orderId: updatedPayment.orderId,
            amount: updatedPayment.amount
        });
    }

    return updatedPayment;
};

export const getUserPaymentsService = async (
    userId: string
) => {

    return getPaymentsByUserId(userId);
};