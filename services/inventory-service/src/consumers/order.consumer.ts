import {
    consumeEvent,
    EXCHANGES
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

            console.log(
                'Inventory Event Received:',
                data
            );

            await reserveInventoryService(
                data.orderId,
                data.items
            );

            console.log(
                `Inventory Reserved For Order ${data.orderId}`
            );
        }
    );
};