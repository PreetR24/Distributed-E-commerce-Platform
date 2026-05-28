import { Router } from 'express';

import {
    addToCartController,
    getCartController,
    clearCartController
} from '@controllers/cart.controller';

import { asyncHandler } from '@shared/common';

const router = Router();

router.post('/', asyncHandler(addToCartController));

router.get('/', asyncHandler(getCartController));

router.delete('/', asyncHandler(clearCartController));

export default router;