import dotenv
from 'dotenv';

dotenv.config();

import http
from 'http';

import app
from './app';

import {

    logger,

    registerShutdownSignals,

    registerShutdownTask,

    disconnectRabbitMQ,

    disconnectRedisCache

}
from '@shared/common';

import {

    initialize

}
from './initialize/initialize';

import {

    initializeSocket

}
from './websocket/socket.server';

const PORT =
    Number(
        process.env.PORT
    );

const bootstrapServer =
async (): Promise<void> => {

    try {

        await initialize();

        const httpServer =
            http.createServer(
                app
            );

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

        registerShutdownTask(
            "HTTP Server",
            () =>
                new Promise<void>(
                    (
                        resolve,
                        reject
                    ) => {
                        httpServer.close(
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

            'Failed to start Notification Service',

            error

        );

        process.exit(1);

    }

};

bootstrapServer();