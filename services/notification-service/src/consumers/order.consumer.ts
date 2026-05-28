import {
    consumeEvent,
    EXCHANGES
} from '@shared/common';

export const startOrderConsumer = async () => {

    await consumeEvent(
        EXCHANGES.ORDER_EVENTS,
        'notification.order.created',
        async (data) => {
            console.log(
                'Notification Event Received:',
                data
            );

            console.log(
                `Order Confirmation Email Sent To ${data.userId}`
            );

            console.log(
                `SMS Notification Sent`
            );
        }
    );
};