import { createClient }
from 'redis';

import {logger} from '../utils/logger';

import {
    cacheHits,
    cacheMisses,
    cacheWrites
}
from '../metrics/infrastructure.metrics';

const redisClient =
    createClient({
        url:
            process.env.REDIS_URL ||
            'redis://redis:6379'
    });

redisClient.on(
    'error',
    (error) => {

        logger.error(
            'Redis Cache Error:',
            error
        );
    }
);

export const connectRedisCache =
async () => {

    if (!redisClient.isOpen) {

        await redisClient.connect();

        logger.info(
            'Redis Cache Connected'
        );
    }
};

export const getCache =
async (
    key: string
) => {
    const value = await redisClient.get(key);

    if (value) {
        cacheHits.inc();
    }
    else {
        cacheMisses.inc();
    }
    return value;
};

export const setCache =
async (
    key: string,
    value: unknown,
    ttlInSeconds = 300
) => {

    await redisClient.set(
        key,
        JSON.stringify(value),
        {
            EX: ttlInSeconds
        }
    );

    cacheWrites.inc();
};

export const deleteCache =
async (
    key: string
) => {

    await redisClient.del(key);
};

export const disconnectRedisCache =
async (): Promise<void> => {

    if (

        redisClient.isOpen

    ) {

        await redisClient.quit();

    }

};