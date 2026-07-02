import dotenv from 'dotenv';

dotenv.config();

import app
from './app';

import {
    initialize
}
from './initialize/initialize';

import {
    startGrpcServer,
    stopGrpcServer
}
from './grpc/product.grpc.server';

import { 
    disconnectRabbitMQ,
    disconnectRedisCache, 
    registerShutdownSignals, 
    registerShutdownTask 
} from '@shared/common';

const PORT =
    Number(
        process.env.PORT
    );

const bootstrapServer =
async () => {

    try {

        await initialize();

        await startGrpcServer();

        const server = app.listen(

            PORT,

            () => {
                console.log(
                    'Product Service Ready'
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

        console.error(

            'Failed to start Product Service',

            error
        );

        process.exit(1);

    }

};

bootstrapServer();