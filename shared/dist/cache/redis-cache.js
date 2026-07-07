"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectRedisCache = exports.deleteCache = exports.setCache = exports.incrementCacheVersion = exports.getCacheVersion = exports.getCache = exports.connectRedisCache = void 0;
const redis_1 = require("redis");
const logger_1 = require("../utils/logger");
const infrastructure_metrics_1 = require("../metrics/infrastructure.metrics");
const CACHE_VERSION_PREFIX = "cache-version";
const redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL ||
        'redis://redis:6379'
});
redisClient.on('error', (error) => {
    logger_1.logger.error('Redis Cache Error:', error);
});
const getVersionKey = (namespace) => {
    return `${CACHE_VERSION_PREFIX}:${namespace}`;
};
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
const getCacheVersion = async (namespace) => {
    const version = await redisClient.get(getVersionKey(namespace));
    if (!version) {
        await redisClient.set(getVersionKey(namespace), "1");
        return 1;
    }
    return Number(version);
};
exports.getCacheVersion = getCacheVersion;
const incrementCacheVersion = async (namespace) => {
    return await redisClient.incr(getVersionKey(namespace));
};
exports.incrementCacheVersion = incrementCacheVersion;
const setCache = async (key, value, ttlInSeconds = 300) => {
    await redisClient.set(key, JSON.stringify(value), {
        EX: ttlInSeconds
    });
    infrastructure_metrics_1.cacheWrites.inc();
};
exports.setCache = setCache;
const deleteCache = async (key) => {
    await redisClient.del(key);
};
exports.deleteCache = deleteCache;
const disconnectRedisCache = async () => {
    if (redisClient.isOpen) {
        await redisClient.quit();
    }
};
exports.disconnectRedisCache = disconnectRedisCache;
