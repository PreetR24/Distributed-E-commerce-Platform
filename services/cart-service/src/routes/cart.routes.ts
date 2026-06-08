import { Router } from 'express';

import {
    addToCartController,
    getCartController,
    clearCartController
} from '@controllers/cart.controller';

import { asyncHandler, requireRole, UserRole } from '@shared/common';

const router = Router();

router.post(
    '/',
    requireRole(UserRole.CUSTOMER),
    asyncHandler(addToCartController)
);

router.get(
    '/',
    requireRole(UserRole.CUSTOMER),
    asyncHandler(getCartController)
);

router.delete(
    '/',
    requireRole(UserRole.CUSTOMER),
    asyncHandler(clearCartController)
);

export default router;