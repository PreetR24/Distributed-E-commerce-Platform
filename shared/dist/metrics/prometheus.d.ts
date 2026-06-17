import client from 'prom-client';
export declare const register: client.Registry<"text/plain; version=0.0.4; charset=utf-8">;
export declare const httpRequestCounter: client.Counter<"route" | "method" | "status">;
export declare const requestDuration: client.Histogram<"route" | "method">;
