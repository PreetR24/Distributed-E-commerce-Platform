import dotenv from 'dotenv';

dotenv.config();

import {
    connectRabbitMQ
} from '@shared/common';

import {
    startOrderAnalyticsConsumer
} from './consumers/order.consumer';

const bootstrap = async () => {

    await connectRabbitMQ();

    await startOrderAnalyticsConsumer();

    console.log(
        'Analytics Service Running'
    );
};

bootstrap();