import { Router } from 'express';

import {
    createCategoryController,
    getCategoriesController
}
from '@controllers/category.controller';

import { asyncHandler, authenticateRequest, requireRole, UserRole }
from '@shared/common';

const router = Router();

router.post(
    '/',
    authenticateRequest,
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