import { Router } from 'express';

import {
    createCategoryController,
    getCategoriesController
}
from '@controllers/category.controller';

import { asyncHandler }
from '@shared/common';

const router = Router();

router.post(
    '/',
    asyncHandler(createCategoryController)
);

router.get(
    '/',
    asyncHandler(getCategoriesController)
);

export default router;