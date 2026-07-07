import { createClient }
from 'redis';

import {logger} from '../utils/logger';

import {
    cacheHits,
    cacheMisses,
    cacheWrites
}
from '../metrics/infrastructure.metrics';

import { CACHE_NAMESPACES } from '../constants/cache-namespaces';
const CACHE_VERSION_PREFIX = "cache-version";

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

const getVersionKey =
(
    namespace: typeof CACHE_NAMESPACES[keyof typeof CACHE_NAMESPACES]
) => {

    return `${CACHE_VERSION_PREFIX}:${namespace}`;
};

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

export const getCacheVersion =
async (
    namespace: typeof CACHE_NAMESPACES[keyof typeof CACHE_NAMESPACES]
): Promise<number> => {

    const version =
        await redisClient.get(
            getVersionKey(namespace)
        );

    if (!version) {

        await redisClient.set(
            getVersionKey(namespace),
            "1"
        );

        return 1;
    }

    return Number(version);
};

export const incrementCacheVersion =
async (
    namespace: typeof CACHE_NAMESPACES[keyof typeof CACHE_NAMESPACES]
): Promise<number> => {

    return await redisClient.incr(
        getVersionKey(namespace)
    );
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