import client from 'prom-client';

export const ordersCreatedCounter =
    new client.Counter({
        name:
            'orders_created_total',
        help:
            'Total Orders Created'
    });

export const paymentsSuccessCounter =
    new client.Counter({
        name:
            'payments_success_total',
        help:
            'Successful Payments'
    });

export const paymentsFailedCounter =
    new client.Counter({
        name:
            'payments_failed_total',
        help:
            'Failed Payments'
    });