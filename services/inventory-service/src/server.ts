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

import {
    startGrpcServer
} from './grpc/inventory.grpc.server';

const PORT = process.env.PORT || 4006;

const bootstrap = async () => {

    await connectRabbitMQ();

    await startOrderConsumer();

    await startPaymentFailureConsumer();

    await startGrpcServer();

    app.listen(PORT, () => {

        logger.info(
            `Inventory Service running on port ${PORT}`
        );
    });
};

bootstrap();