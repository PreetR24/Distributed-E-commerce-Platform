import express from 'express';

import cors from 'cors';

import helmet from 'helmet';

import morgan from 'morgan';

import {
    requestLogger,
    apiRateLimiter,
    requestIdMiddleware
} from '@shared/common';

import {
    authProxy,
    usersProxy,
    adminProxy,
    productsProxy,
    categoriesProxy,
    cartProxy,
    ordersProxy,
    paymentsProxy,
    inventoryProxy,
    searchProxy,
    notificationsProxy,
    analyticsProxy
} from '@proxy/services.proxy';

import v1Routes from './v1';

import {
    globalErrorHandler,
    register,
    metricsMiddleware
 }
from '@shared/common';

const app = express();

app.get(
    '/metrics',
    async (_req, res) => {
        res.set(
            'Content-Type',
            register.contentType
        );
        res.end(
            await register.metrics()
        );
    }
);

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(morgan('dev'));

app.use(requestIdMiddleware);

app.use(requestLogger);

app.use(apiRateLimiter);

app.use(metricsMiddleware);

app.use(
    '/api/v1/auth',
    authProxy
);

app.use(
    '/api/v1/users',
    usersProxy
);

app.use(
    '/api/v1/products',
    productsProxy
);

app.use(
    '/api/v1/admin',
    adminProxy
);

app.use(
    '/api/v1/categories',
    categoriesProxy
);

app.use(
    '/api/v1/cart',
    cartProxy
);

app.use(
    '/api/v1/orders',
    ordersProxy
);

app.use(
    '/api/v1/payments',
    paymentsProxy
);

app.use(
    '/api/v1/inventory',
    inventoryProxy
);

app.use(
    '/api/v1/analytics',
    analyticsProxy
);

app.use(
    '/api/v1/notifications',
    notificationsProxy
);

app.use(
    '/api/v1/search',
    searchProxy
);

app.use('/api/v1', v1Routes);

app.use((_req, res) => {

    return res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

app.use(globalErrorHandler);

export default app;