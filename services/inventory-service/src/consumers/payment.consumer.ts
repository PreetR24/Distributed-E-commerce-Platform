import {
    consumeEvent,
    EXCHANGES,
    QUEUES
} from '@shared/common';

import {
    releaseInventoryReservationService
} from '@services/inventory.service';

export const startPaymentFailureConsumer =
async () => {

    await consumeEvent(
        EXCHANGES.PAYMENT_EVENTS,

        'inventory.payment.failed',

        async (data) => {

            if (
                data.event !==
                QUEUES.PAYMENT_FAILED
            ) {
                return;
            }

            console.log(
                'Payment Failed Event:',
                data
            );

            await releaseInventoryReservationService(
                data.orderId
            );

            console.log(
                `Inventory Released For Order ${data.orderId}`
            );
        }
    );
};