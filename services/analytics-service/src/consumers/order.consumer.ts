import {
    consumeEvent,
    EXCHANGES,
    logger
} from '@shared/common';

export const startOrderAnalyticsConsumer =
async () => {

    await consumeEvent(

        EXCHANGES.ORDER_EVENTS,

        'analytics.order.created',

        async (data) => {

            logger.info(
                'Analytics Event Received:',
                {
                    ...data
                }
            );

            logger.info(
                `Revenue Added: ${data.totalAmount}`
            );

            logger.info(
                `Analytics Updated`
            );
        }
    );
};