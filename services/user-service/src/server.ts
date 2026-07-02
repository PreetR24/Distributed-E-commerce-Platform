import dotenv from 'dotenv';

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

const PORT =
    Number(
        process.env.PORT
    );

const bootstrapServer =
async (): Promise<void> => {

    try {

        await initialize();

        const server = app.listen(

            PORT,
            () => {
                logger.info(
                    `User Service running on port ${PORT}`
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
            'Failed to start User Service',
            error
        );
        process.exit(1);
    }
};

bootstrapServer();