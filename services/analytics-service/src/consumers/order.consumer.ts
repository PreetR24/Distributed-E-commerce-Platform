import {
    consumeEvent,
    EXCHANGES
} from '@shared/common';

export const startOrderAnalyticsConsumer =
async () => {

    await consumeEvent(

        EXCHANGES.ORDER_EVENTS,

        'analytics.order.created',

        async (data) => {

            console.log(
                'Analytics Event Received:',
                data
            );

            console.log(
                `Revenue Added: ${data.totalAmount}`
            );

            console.log(
                `Analytics Updated`
            );
        }
    );
};