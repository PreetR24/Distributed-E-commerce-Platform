import dotenv from 'dotenv';

dotenv.config();

import {
    connectRabbitMQ
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

    console.log(
        'Notification Service Running'
    );
};

bootstrap();