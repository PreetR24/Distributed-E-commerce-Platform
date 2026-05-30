import { createClient }
from 'redis';

import {logger} from '../utils/logger';

const redisClient =
    createClient({
        url:
            process.env.REDIS_URL ||
            'redis://localhost:6379'
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

    return redisClient.get(key);
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
};

export const deleteCache =
async (
    key: string
) => {

    await redisClient.del(key);
};