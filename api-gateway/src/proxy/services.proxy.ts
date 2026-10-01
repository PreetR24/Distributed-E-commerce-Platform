import {
    createProxyMiddleware
} from 'http-proxy-middleware';

import {
    SERVICES
} from '@shared/common'

const fixRequestBody = (
    proxyReq: any,
    req: any
) => {

    if (
        !req.body ||
        !Object.keys(req.body).length
    ) {
        return;
    }

    const bodyData =
        JSON.stringify(req.body);

    proxyReq.setHeader(
        'Content-Type',
        'application/json'
    );

    proxyReq.setHeader(
        'Content-Length',
        Buffer.byteLength(bodyData)
    );

    proxyReq.write(bodyData);
};

const createProxy = (
    target: string,
    serviceBasePath: string
) => createProxyMiddleware({

    target,

    changeOrigin: true,

    pathRewrite: (
        path
    ) => {

        return `/api/v1${serviceBasePath}${path}`;
    },

    on: {
        proxyReq: fixRequestBody
    }
});

export const authProxy =
    createProxy(
        SERVICES.USER,
        '/auth'
    );

export const usersProxy =
    createProxy(
        SERVICES.USER,
        '/users'
    );

export const adminProxy =
    createProxy(
        SERVICES.USER,
        '/admin'
    );

export const productsProxy =
    createProxy(
        SERVICES.PRODUCT,
        '/products'
    );

export const categoriesProxy =
    createProxy(
        SERVICES.PRODUCT,
        '/categories'
    );

export const cartProxy =
    createProxy(
        SERVICES.CART,
        '/cart'
    );

export const ordersProxy =
    createProxy(
        SERVICES.ORDER,
        '/orders'
    );

export const paymentsProxy =
    createProxy(
        SERVICES.PAYMENT,
        '/payments'
    );

export const inventoryProxy =
    createProxy(
        SERVICES.INVENTORY,
        '/inventory'
    );

export const searchProxy =
    createProxy(
        SERVICES.SEARCH,
        '/search'
    );

export const analyticsProxy =
    createProxy(
        SERVICES.ANALYTICS,
        '/analytics'
    );

export const notificationsProxy =
    createProxy(
        SERVICES.NOTIFICATION,
        '/notifications'
    );

/// Root level proxies for accessing root level routes in each services

const createRootServiceProxy = (
    target: string,
    publicPrefix: string
) =>
    createProxyMiddleware({
        target,
        changeOrigin: true,

        pathRewrite: (path) => {
            return path.replace(publicPrefix, '');
        },

        on: {
            proxyReq: fixRequestBody,

            proxyRes: (_proxyRes, req) => {
                console.log(
                    `[ROOT PROXY] ${req.method} ${req.url}`
                );
            },

            error: (err, req) => {
                console.error(
                    `[ROOT PROXY ERROR] ${req.method} ${req.url}`,
                    err.message
                );
            }
        }
    });

export const userRootProxy =
    createRootServiceProxy(
        SERVICES.USER,
        '/service/users'
    );

export const productRootProxy =
    createRootServiceProxy(
        SERVICES.PRODUCT,
        '/service/products'
    );

export const cartRootProxy =
    createRootServiceProxy(
        SERVICES.CART,
        '/service/cart'
    );

export const inventoryRootProxy =
    createRootServiceProxy(
        SERVICES.INVENTORY,
        '/service/inventory'
    );

export const orderRootProxy =
    createRootServiceProxy(
        SERVICES.ORDER,
        '/service/orders'
    );

export const paymentRootProxy =
    createRootServiceProxy(
        SERVICES.PAYMENT,
        '/service/payments'
    );

export const searchRootProxy =
    createRootServiceProxy(
        SERVICES.SEARCH,
        '/service/search'
    );

export const analyticsRootProxy =
    createRootServiceProxy(
        SERVICES.ANALYTICS,
        '/service/analytics'
    );

export const notificationRootProxy =
    createRootServiceProxy(
        SERVICES.NOTIFICATION,
        '/service/notification'
    );