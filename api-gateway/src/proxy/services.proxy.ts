import {
    createProxyMiddleware
} from 'http-proxy-middleware';

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
    }
});

export const authProxy =
    createProxy(
        'http://localhost:4001',
        '/auth'
    );

export const usersProxy =
    createProxy(
        'http://localhost:4001',
        '/users'
    );

export const productsProxy =
    createProxy(
        'http://localhost:4002',
        '/products'
    );

export const categoriesProxy =
    createProxy(
        'http://localhost:4002',
        '/categories'
    );

export const cartProxy =
    createProxy(
        'http://localhost:4003',
        '/cart'
    );

export const ordersProxy =
    createProxy(
        'http://localhost:4004',
        '/orders'
    );

export const paymentsProxy =
    createProxy(
        'http://localhost:4005',
        '/payments'
    );

export const inventoryProxy =
    createProxy(
        'http://localhost:4006',
        '/inventory'
    );