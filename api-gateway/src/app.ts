import express from 'express';

import cors from 'cors';

import helmet from 'helmet';

import morgan from 'morgan';

import {
    requestIdMiddleware
} from '@middleware/request-id.middleware';

import {
    apiRateLimiter
} from '@middleware/rate-limit.middleware';

import {
    authenticateRequest
} from '@middleware/auth.middleware';

import {
    requestLogger
} from '@middleware/request-logger.middleware';

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
    authenticateRequest,
    usersProxy
);

app.use(
    '/api/v1/products',
    authenticateRequest,
    productsProxy
);

app.use(
    '/api/v1/admin',
    adminProxy
);

app.use(
    '/api/v1/categories',
    authenticateRequest,
    categoriesProxy
);

app.use(
    '/api/v1/cart',
    authenticateRequest,
    cartProxy
);

app.use(
    '/api/v1/orders',
    authenticateRequest,
    ordersProxy
);

app.use(
    '/api/v1/payments',
    authenticateRequest,
    paymentsProxy
);

app.use(
    '/api/v1/inventory',
    authenticateRequest,
    inventoryProxy
);

app.use(
    '/api/v1/analytics',
    authenticateRequest,
    analyticsProxy
);

app.use(
    '/api/v1/notifications',
    authenticateRequest,
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