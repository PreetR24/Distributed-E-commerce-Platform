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

export const startOrderConsumer =
async () => {

    await consumeEvent(
        EXCHANGES.ORDER_EVENTS,
        'notification.order.created',
        async (data) => {
            if (
                data.event !==
                QUEUES.ORDER_CREATED
            ) {
                return;
            }

            const notification =
                await createNotification({
                    userId: data.userId,
                    title:
                        'Order Created',
                    message:
                        `Order ${data.orderId} created successfully`,
                    type:
                        'ORDER'
                });

            sendNotification(
                data.userId,
                notification
            );
        }
    );
};