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
        UserRole.ADMIN,
        UserRole.SELLER
    ),
    asyncHandler(
        getNotificationsController
    )
);

router.patch(
    '/:id/read',
    asyncHandler(
        markReadController
    )
);

router.patch(
    '/read-all',
    asyncHandler(
        markAllReadController
    )
);

export default router;