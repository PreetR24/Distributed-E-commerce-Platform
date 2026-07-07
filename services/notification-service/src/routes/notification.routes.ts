import { Router }
from 'express';

import {
    asyncHandler,
    requireRole,
    UserRole
}
from '@shared/common';

import {
    getNotificationsController,
    markReadController,
    markAllReadController
}
from '@controllers/notification.controller';

const router = Router();

router.get(
    '/',
    requireRole(
        UserRole.CUSTOMER,
        UserRole.ADMIN
    ),
    asyncHandler(
        getNotificationsController
    )
);

router.patch(
    '/:id/read',
    requireRole(
        UserRole.CUSTOMER
    ),
    asyncHandler(
        markReadController
    )
);

router.patch(
    '/read-all',
    requireRole(
        UserRole.CUSTOMER
    ),
    asyncHandler(
        markAllReadController
    )
);

export default router;