import dotenv from 'dotenv';

dotenv.config();

import {
    connectRabbitMQ,
    logger
} from '@shared/common';

import {
    startOrderAnalyticsConsumer
} from './consumers/order.consumer';

const bootstrap = async () => {

    await connectRabbitMQ();

    await startOrderAnalyticsConsumer();

    logger.info(
        'Analytics Service Running'
    );
};

bootstrap();