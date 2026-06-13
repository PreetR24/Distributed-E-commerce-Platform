import {
    consumeEvent,
    EXCHANGES,
    logger
} from '@shared/common';

import {
    reserveInventoryService
} from '@services/inventory.service';

export const startOrderConsumer =
async () => {

    await consumeEvent(
        EXCHANGES.ORDER_EVENTS,

        'inventory.order.created',

        async (data) => {

            logger.info(
                'Inventory Event Received:',
                {
                    data
                }
            );

            await reserveInventoryService(
                data.orderId,
                data.items
            );

            logger.info({
                event: 'Inventory Reserved',
                orderId: data.orderId
            });
        }
    );
};