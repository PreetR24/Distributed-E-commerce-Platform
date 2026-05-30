import {
    consumeEvent,
    EXCHANGES,
    logger
} from '@shared/common';

export const startPaymentConsumer = async () => {
    await consumeEvent(
        EXCHANGES.PAYMENT_EVENTS,
        'notification.payment.success',
        async (data) => {
            logger.info(
                'Payment Success Event:',
                {
                   data
                }
            );
            logger.info(
                `Payment Receipt Sent For Order ${data.orderId}`
            );
        }
    );
};