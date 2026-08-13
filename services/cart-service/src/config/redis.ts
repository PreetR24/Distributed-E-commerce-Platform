import { createClient } from 'redis';
import { logger } from '@shared/common';

export const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on('error', (error) => {
    logger.error('Redis Error:',
        {
            error
        }
    );
});

export const connectRedis = async () => {
    await redisClient.connect();

    logger.info('Redis Connected');
};