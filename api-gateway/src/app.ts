import express from 'express';

import cors from 'cors';

import helmet from 'helmet';

import morgan from 'morgan';

import {
    globalErrorHandler
} from '@shared/common';

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
    authProxy,
    usersProxy,
    productsProxy,
    categoriesProxy,
    cartProxy,
    ordersProxy,
    paymentsProxy,
    inventoryProxy
} from '@proxy/services.proxy';

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan('dev'));

app.use(requestIdMiddleware);

app.use(apiRateLimiter);

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
    productsProxy
);

app.use(
    '/api/v1/categories',
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

app.use((_req, res) => {

    return res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

app.use(globalErrorHandler);

export default app;