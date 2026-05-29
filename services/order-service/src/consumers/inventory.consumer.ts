import {
    consumeEvent,
    EXCHANGES,
    QUEUES
} from '@shared/common';

import {
    cancelOrder
} from '@repositories/order.repository';

export const startInventoryFailureConsumer =
async () => {

    await consumeEvent(
        EXCHANGES.ORDER_EVENTS,

        'order.inventory.failed',

        async (data) => {

            if (
                data.event !==
                QUEUES
                    .INVENTORY_RESERVATION_FAILED
            ) {
                return;
            }

            console.log(
                'Inventory Reservation Failed:',
                data
            );

            await cancelOrder(
                data.orderId
            );

            console.log(
                `Order Cancelled Due To Inventory Failure: ${data.orderId}`
            );
        }
    );
};