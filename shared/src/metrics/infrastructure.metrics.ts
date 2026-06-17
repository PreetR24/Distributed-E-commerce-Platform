import client from 'prom-client';

export const cacheHits =
    new client.Counter({
        name:
            'redis_cache_hits_total',
        help:
            'Redis Cache Hits'
    });

export const cacheMisses =
    new client.Counter({
        name:
            'redis_cache_misses_total',
        help:
            'Redis Cache Misses'
    });

export const publishedEvents =
    new client.Counter({
        name:
            'rabbitmq_events_published_total',
        help:
            'RabbitMQ Events Published'
    });

export const consumedEvents =
    new client.Counter({
        name:
            'rabbitmq_events_consumed_total',
        help:
            'RabbitMQ Events Consumed'
    });