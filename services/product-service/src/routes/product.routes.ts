import { Router } from 'express';

import {
    createProductController,
    getProductsController
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

export default router;