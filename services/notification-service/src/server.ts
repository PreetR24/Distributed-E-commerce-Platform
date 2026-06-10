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

import http from 'http';

import app from './app';

import {
    initializeSocket
}
from './websocket/socket.server';

const PORT = process.env.PORT;

const bootstrap = async () => {
    await connectRabbitMQ();
    await startOrderConsumer();
    await startPaymentConsumer();

    const httpServer = http.createServer(app);

    initializeSocket(
        httpServer
    );

    httpServer.listen(
        PORT,
        () => {
            logger.info(
                `Notification Service running on port ${PORT}`
            );
        }
    );
};

bootstrap();