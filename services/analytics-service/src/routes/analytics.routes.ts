import { Router }
from 'express';

import {
    asyncHandler,
    requireRole,
    UserRole
}
from '@shared/common';

import {
    getDashboardController
}
from '@controllers/analytics.controller';

const router = Router();

router.get(
    '/dashboard',
    requireRole(
        UserRole.ADMIN
    ),
    asyncHandler(
        getDashboardController
    )
);

export default router;