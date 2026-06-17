import client from 'prom-client';

client.collectDefaultMetrics();

export const register =
    client.register;

export const httpRequestCounter =
    new client.Counter({

        name:
            'http_requests_total',

        help:
            'Total HTTP Requests',

        labelNames: [
            'method',
            'route',
            'status'
        ]
    });

export const requestDuration =
    new client.Histogram({

        name:
            'http_request_duration_ms',

        help:
            'Request Duration',

        labelNames: [
            'method',
            'route'
        ]
    });