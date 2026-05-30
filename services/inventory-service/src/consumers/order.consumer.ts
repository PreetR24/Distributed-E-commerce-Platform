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

            logger.info(
                `Inventory Reserved For Order ${data.orderId}`
            );
        }
    );
};