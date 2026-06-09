import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import {
    connectRabbitMQ,
    logger
}
from '@shared/common';

import {
    initializeMetrics
}
from '@repositories/analytics.repository';

import {
    startOrderAnalyticsConsumer
}
from './consumers/order.consumer';

import {
    startPaymentAnalyticsConsumer
}
from './consumers/payment.consumer';

import {
    startProductAnalyticsConsumer
}
from './consumers/product.consumer';

const PORT =
    process.env.PORT || 4008;

const bootstrap =
async () => {

    await connectRabbitMQ();

    await initializeMetrics();

    await startOrderAnalyticsConsumer();

    await startPaymentAnalyticsConsumer();

    await startProductAnalyticsConsumer();

    app.listen(
        PORT,
        () => {

            logger.info(
                `Analytics Service Running on ${PORT}`
            );
        }
    );
};

bootstrap();