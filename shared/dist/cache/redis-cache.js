"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCache = exports.setCache = exports.getCache = exports.connectRedisCache = void 0;
const redis_1 = require("redis");
const logger_1 = require("../utils/logger");
const infrastructure_metrics_1 = require("../metrics/infrastructure.metrics");
const redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL ||
        'redis://redis:6379'
});
redisClient.on('error', (error) => {
    logger_1.logger.error('Redis Cache Error:', error);
});
const connectRedisCache = async () => {
    if (!redisClient.isOpen) {
        await redisClient.connect();
        logger_1.logger.info('Redis Cache Connected');
    }
};
exports.connectRedisCache = connectRedisCache;
const getCache = async (key) => {
    const value = await redisClient.get(key);
    if (value) {
        infrastructure_metrics_1.cacheHits.inc();
    }
    else {
        infrastructure_metrics_1.cacheMisses.inc();
    }
    return value;
};
exports.getCache = getCache;
const setCache = async (key, value, ttlInSeconds = 300) => {
    await redisClient.set(key, JSON.stringify(value), {
        EX: ttlInSeconds
    });
};
exports.setCache = setCache;
const deleteCache = async (key) => {
    await redisClient.del(key);
};
exports.deleteCache = deleteCache;
