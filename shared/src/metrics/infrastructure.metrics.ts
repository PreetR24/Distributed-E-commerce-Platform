import client from "prom-client";

export const cacheHits =
    new client.Counter({

        name:
            "redis_cache_hits_total",

        help:
            "Redis Cache Hits"

    });

export const cacheMisses =
    new client.Counter({

        name:
            "redis_cache_misses_total",

        help:
            "Redis Cache Misses"

    });