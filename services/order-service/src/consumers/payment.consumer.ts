import {
    consumeEvent,
    EXCHANGES,
    QUEUES
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

            console.log(
                'Cancelling Order:',
                data.orderId
            );

            await cancelOrder(
                data.orderId
            );

            console.log(
                `Order Cancelled ${data.orderId}`
            );
        }
    );
};