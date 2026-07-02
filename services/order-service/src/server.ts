import dotenv
from 'dotenv';

dotenv.config();

import app
from './app';

import {

    disconnectRabbitMQ,
    disconnectRedisCache,
    logger,
    registerShutdownSignals,
    registerShutdownTask

}
from '@shared/common';

import {

    initialize

}
from './initialize/initialize';

import {

    startGrpcServer,
    stopGrpcServer

}
from './grpc/order.grpc.server';

const PORT =
    Number(
        process.env.PORT
    );

const bootstrapServer =
async (): Promise<void> => {

    try {

        await initialize();

        await startGrpcServer();

        const server = app.listen(

            PORT,

            () => {

                logger.info(
                    `Order Service running on port ${PORT}`
                );
            }

        );

        registerShutdownTask(
            "HTTP Server",
            () =>
                new Promise<void>(
                    (
                        resolve,
                        reject
                    ) => {
                        server.close(
                            error => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve();
                                }
                            }
                        );
                    }
                )
        );

        registerShutdownTask(
            "gRPC Server",
            stopGrpcServer
        );

        registerShutdownTask(
            "RabbitMQ",
            disconnectRabbitMQ
        );

        registerShutdownTask(
            "Redis Cache",
            disconnectRedisCache
        );

        registerShutdownSignals();

    }

    catch (

        error

    ) {

        logger.error(

            'Failed to start Order Service',

            error

        );

        process.exit(1);

    }

};

bootstrapServer();