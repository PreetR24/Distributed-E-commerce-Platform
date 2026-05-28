import { createClient } from 'redis';

export const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on('error', (error) => {
    console.error('Redis Error:', error);
});

export const connectRedis = async () => {
    await redisClient.connect();

    console.log('Redis Connected');
};