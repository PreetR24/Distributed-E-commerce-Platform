import {
    consumeEvent,
    EXCHANGES,
    QUEUES,
    logger
}
from '@shared/common';

import {
    incrementRevenue
}
from '@repositories/analytics.repository';

export const startOrderAnalyticsConsumer =
async () => {

    await consumeEvent(

        EXCHANGES.ORDER_EVENTS,

        'analytics.order.created',

        async (data) => {

            if (
                data.event !==
                QUEUES.ORDER_CREATED
            ) {
                return;
            }

            await incrementRevenue(
                data.totalAmount
            );

            logger.info(
                `Analytics Revenue Updated`
            );
        }
    );
};