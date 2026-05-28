import { Router }
from 'express';

import {
    authenticateRequest
} from '@middleware/auth.middleware';

import {
    usersProxy,
    productsProxy,
    cartProxy,
    ordersProxy,
    paymentsProxy,
    inventoryProxy,
    authProxy,
    categoriesProxy,
} from '@proxy/services.proxy';

const router = Router();

router.use(
    '/auth',
    authProxy
);

router.use(
    '/users',
    authenticateRequest,
    usersProxy
);

router.use(
    '/products',
    productsProxy
);

router.use(
    '/categories',
    categoriesProxy
);

router.use(
    '/cart',
    authenticateRequest,
    cartProxy
);

router.use(
    '/orders',
    authenticateRequest,
    ordersProxy
);

router.use(
    '/payments',
    authenticateRequest,
    paymentsProxy
);

router.use(
    '/inventory',
    authenticateRequest,
    inventoryProxy
);

export default router;