import client from 'prom-client';
export declare const cacheHits: client.Counter<string>;
export declare const cacheMisses: client.Counter<string>;
export declare const publishedEvents: client.Counter<string>;
export declare const consumedEvents: client.Counter<string>;
