import {
    consumeEvent,
    EXCHANGES
} from '@shared/common';

export const startPaymentConsumer = async () => {
    await consumeEvent(
        EXCHANGES.PAYMENT_EVENTS,
        'notification.payment.success',
        async (data) => {
            console.log(
                'Payment Success Event:',
                data
            );
            console.log(
                `Payment Receipt Sent For Order ${data.orderId}`
            );
        }
    );
};