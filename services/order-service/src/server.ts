import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import {
    connectRabbitMQ,
    logger
} from '@shared/common';

import {
    startPaymentFailureConsumer
} from './consumers/payment.consumer';

import {
    startInventoryFailureConsumer
} from './consumers/inventory.consumer';

import {
    startOrderGrpcServer
} from './grpc/order.grpc.server';

const PORT = process.env.PORT || 4004;

const bootstrap = async () => {

    await connectRabbitMQ();

    await startPaymentFailureConsumer();

    await startInventoryFailureConsumer();

    startOrderGrpcServer();

    app.listen(PORT, () => {
        logger.info(
            `Order Service running on port ${PORT}`
        );
    });
};

bootstrap();