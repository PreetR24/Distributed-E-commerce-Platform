import { Router } from 'express';

import {
    createProductController,
    getProductsController,
    getSingleProductController,
    updateProductController
} from '@controllers/product.controller';

import { asyncHandler }
from '@shared/common';

const router = Router();

router.post(
    '/',
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
    asyncHandler(updateProductController)
);

export default router;