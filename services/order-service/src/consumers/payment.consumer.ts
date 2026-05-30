import {
    consumeEvent,
    EXCHANGES,
    QUEUES,
    logger
} from '@shared/common';

import {
    cancelOrder
} from '@repositories/order.repository';

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