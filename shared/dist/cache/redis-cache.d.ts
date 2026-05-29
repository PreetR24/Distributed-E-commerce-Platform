export declare const connectRedisCache: () => Promise<void>;
export declare const getCache: (key: string) => Promise<string | null>;
export declare const setCache: (key: string, value: unknown, ttlInSeconds?: number) => Promise<void>;
export declare const deleteCache: (key: string) => Promise<void>;
