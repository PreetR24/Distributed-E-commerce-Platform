import dotenv from 'dotenv';

dotenv.config();

import {
    connectRabbitMQ,
    logger
} from '@shared/common';

import {
    startOrderConsumer
} from './consumers/order.consumer';

import {
    startPaymentConsumer
} from './consumers/payment.consumer';

const bootstrap = async () => {
    await connectRabbitMQ();
    await startOrderConsumer();
    await startPaymentConsumer();

    logger.info(
        'Notification Service Running'
    );
};

bootstrap();