import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import {
    connectRabbitMQ,
    logger
} from '@shared/common';

import {
    startOrderConsumer
} from './consumers/order.consumer';

import {
    startPaymentFailureConsumer
} from './consumers/payment.consumer';

const PORT = process.env.PORT || 4006;

const bootstrap = async () => {

    await connectRabbitMQ();

    await startOrderConsumer();

    await startPaymentFailureConsumer();

    app.listen(PORT, () => {

        logger.info(
            `Inventory Service running on port ${PORT}`
        );
    });
};

bootstrap();