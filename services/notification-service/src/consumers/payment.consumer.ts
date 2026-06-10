import {

    consumeEvent,

    EXCHANGES,

    QUEUES

}
from '@shared/common';

import {
    createNotification
}
from '@repositories/notification.repository';

import {
    sendNotification
}
from '@websocket/socket.server';

export const startPaymentConsumer =
async () => {

    await consumeEvent(

        EXCHANGES.PAYMENT_EVENTS,

        'notification.payment',

        async (data) => {

            if (
                data.event ===
                QUEUES.PAYMENT_SUCCESS
            ) {

                const notification =
                    await createNotification({

                        userId:
                            data.userId,

                        title:
                            'Payment Success',

                        message:
                            `Payment completed for order ${data.orderId}`,

                        type:
                            'PAYMENT'
                    });

                sendNotification(
                    data.userId,
                    notification
                );
            }

            if (
                data.event ===
                QUEUES.PAYMENT_FAILED
            ) {

                const notification =
                    await createNotification({

                        userId:
                            data.userId,

                        title:
                            'Payment Failed',

                        message:
                            `Payment failed for order ${data.orderId}`,

                        type:
                            'PAYMENT'
                    });

                sendNotification(
                    data.userId,
                    notification
                );
            }
        }
    );
};