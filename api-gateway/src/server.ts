import dotenv from 'dotenv';

dotenv.config();

import app
from './app';

import {
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
                    `API Gateway running on port ${PORT}`
                );
            }
        );

        registerShutdownTask(
            "API Gateway Server",
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

        registerShutdownSignals();
    }

    catch (
        error
    ) {
        logger.error(
            'Failed to start API Gateway',
            error
        );

        process.exit(1);
    }
};

bootstrapServer();