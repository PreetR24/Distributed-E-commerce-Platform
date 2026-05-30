import {
    consumeEvent,
    EXCHANGES,
    logger
} from '@shared/common';

export const startOrderConsumer = async () => {

    await consumeEvent(
        EXCHANGES.ORDER_EVENTS,
        'notification.order.created',
        async (data) => {
            logger.info(
                'Notification Event Received:',
                {
                    ...data
                }
            );

            logger.info(
                `Order Confirmation Email Sent To ${data.userId}`
            );

            logger.info(
                `SMS Notification Sent`
            );
        }
    );
};