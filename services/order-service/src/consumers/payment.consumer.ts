import {
    consumeEvent,
    EXCHANGES,
    QUEUES,
    logger
} from '@shared/common';

import {
    cancelOrder,
    updateOrderStatus
} from '@repositories/order.repository';
import { OrderStatus } from '../../generated/prisma';

export const startPaymentSuccessConsumer =
async () => {

    await consumeEvent(
        EXCHANGES.PAYMENT_EVENTS,

        "order.payment.success",

        async (data) => {

            if (
                data.event !==
                QUEUES.PAYMENT_SUCCESS
            ) {
                return;
            }

            logger.info(
                `Confirming Order: ${data.orderId}`
            );

            await updateOrderStatus(
                data.orderId,
                OrderStatus.CONFIRMED
            );

            logger.info(
                `Order Confirmed: ${data.orderId}`
            );
        }
    );
};

export const startPaymentFailureConsumer =
async () => {

    await consumeEvent(
        EXCHANGES.PAYMENT_EVENTS,

        'order.payment.failed',

        async (data) => {

            if (
                data.event !==
                QUEUES.PAYMENT_FAILED
            ) {
                return;
            }

            logger.info(
                `Cancelling Order: ${data.orderId}`,
            );

            await cancelOrder(
                data.orderId
            );

            logger.info(
                `Order Cancelled ${data.orderId}`
            );
        }
    );
};