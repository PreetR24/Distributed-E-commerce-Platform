import {
    consumeEvent,
    EXCHANGES,
    QUEUES
}
from '@shared/common';

import {
    incrementProducts
}
from '@repositories/analytics.repository';

export const startProductAnalyticsConsumer =
async () => {

    await consumeEvent(

        EXCHANGES.PRODUCT_EVENTS,

        'analytics.product',

        async (data) => {

            if (
                data.event ===
                QUEUES.PRODUCT_CREATED
            ) {

                await incrementProducts();
            }
        }
    );
};