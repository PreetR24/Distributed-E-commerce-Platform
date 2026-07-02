import {
    logger
}
from '../utils/logger';

interface ShutdownTask {

    name: string;

    task: () => Promise<void>;

}

const cleanupTasks: ShutdownTask[] = [];

let shuttingDown = false;

export const registerShutdownTask =
(
    name: string,
    task: () => Promise<void>
): void => {

    cleanupTasks.push({

        name,

        task

    });

};

export const gracefulShutdown =
async (): Promise<void> => {

    if (
        shuttingDown
    ) {

        return;

    }

    shuttingDown = true;

    logger.info(
        'Graceful shutdown started.'
    );

    const tasks =
        [...cleanupTasks].reverse();

    for (

        const [

            index,

            cleanupTask

        ]

        of tasks.entries()

    ) {

        try {

            logger.info(
                `Running shutdown task ${index + 1}/${tasks.length}: ${cleanupTask.name}`
            );

            await cleanupTask.task();

            logger.info(
                `Completed shutdown task ${index + 1}/${tasks.length}: ${cleanupTask.name}`
            );

        }

        catch (

            error

        ) {

            logger.error(

                `Shutdown task failed: ${cleanupTask.name}`,

                error

            );

        }

    }

    logger.info(
        'Graceful shutdown completed.'
    );

    process.exit(0);

};