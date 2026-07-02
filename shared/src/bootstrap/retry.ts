import {
    logger
}
from '../utils/logger';

import {
    sleep
}
from './sleep';

import type {
    RetryOptions
}
from './retry-options';

export const retry =
async (
    {
        name,
        task,
        maxAttempts = 10,
        delay = 2000,
        backoffMultiplier = 1.5
    }: RetryOptions
): Promise<void> => {

    let currentDelay = delay;
    let attempt = 1;

    while (
        attempt <= maxAttempts
    ) {
        try {
            
            await task();
            
            logger.info(
                `${name} Connected`
            );
            return;
        }

        catch (
            error
        ) {
            logger.warn(
                `${name} Connection Failed (Attempt ${attempt}/${maxAttempts})`
            );

            if (
                attempt === maxAttempts
            ) {
                logger.error(
                    `${name} Connection Failed Permanently`,
                    error
                );
                throw error;
            }

            logger.info(
                `Retrying ${name} in ${currentDelay} ms...`
            );

            await sleep(
                currentDelay
            );

            currentDelay =
                Math.floor(
                    currentDelay *
                    backoffMultiplier
                );
            attempt++;
        }
    }
};