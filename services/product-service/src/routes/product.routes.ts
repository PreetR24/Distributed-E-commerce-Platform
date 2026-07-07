import { Router } from 'express';

import {
    createProductController,
    getProductsController,
    getSingleProductController,
    updateProductController,
    getAllProductsController
} from '@controllers/product.controller';

import { asyncHandler, authenticateRequest, requireRole, UserRole }
from '@shared/common';

const router = Router();

router.get(
    '/internal/rebuild',
    authenticateRequest,
    requireRole(UserRole.ADMIN),
    asyncHandler(getAllProductsController)
);

router.post(
    '/',
    authenticateRequest,
    requireRole(
        UserRole.ADMIN,
        UserRole.SELLER
    ),
    asyncHandler(createProductController)
);

router.get(
    '/',
    asyncHandler(getProductsController)
);

router.get(
    '/:productId',
    asyncHandler(getSingleProductController)
);

router.patch(
    '/:productId',
    authenticateRequest,
    requireRole(
        UserRole.ADMIN,
        UserRole.SELLER
    ),
    asyncHandler(updateProductController)
);

export default router;