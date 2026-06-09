import {
    consumeEvent,
    EXCHANGES,
    QUEUES
}
from '@shared/common';

import {
    incrementSuccessfulPayments,
    incrementFailedPayments
}
from '@repositories/analytics.repository';

export const startPaymentAnalyticsConsumer =
async () => {

    await consumeEvent(

        EXCHANGES.PAYMENT_EVENTS,

        'analytics.payment',

        async (data) => {

            if (
                data.event ===
                QUEUES.PAYMENT_SUCCESS
            ) {

                await incrementSuccessfulPayments();
            }

            if (
                data.event ===
                QUEUES.PAYMENT_FAILED
            ) {

                await incrementFailedPayments();
            }
        }
    );
};