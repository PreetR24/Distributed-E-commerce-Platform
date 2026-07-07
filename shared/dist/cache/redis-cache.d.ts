import { CACHE_NAMESPACES } from '../constants/cache-namespaces';
export declare const connectRedisCache: () => Promise<void>;
export declare const getCache: (key: string) => Promise<string | null>;
export declare const getCacheVersion: (namespace: (typeof CACHE_NAMESPACES)[keyof typeof CACHE_NAMESPACES]) => Promise<number>;
export declare const incrementCacheVersion: (namespace: (typeof CACHE_NAMESPACES)[keyof typeof CACHE_NAMESPACES]) => Promise<number>;
export declare const setCache: (key: string, value: unknown, ttlInSeconds?: number) => Promise<void>;
export declare const deleteCache: (key: string) => Promise<void>;
export declare const disconnectRedisCache: () => Promise<void>;
