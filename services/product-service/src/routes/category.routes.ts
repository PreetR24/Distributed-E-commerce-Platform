import { Router } from 'express';

import {
    createCategoryController,
    getCategoriesController
}
from '@controllers/category.controller';

import { asyncHandler, requireRole, UserRole }
from '@shared/common';

const router = Router();

router.post(
    '/',
    requireRole(
        UserRole.ADMIN
    ),
    asyncHandler(createCategoryController)
);

router.get(
    '/',
    asyncHandler(getCategoriesController)
);

export default router;