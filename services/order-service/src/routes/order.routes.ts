import { Router } from 'express';

import { asyncHandler, requireRole, UserRole } from '@shared/common';

import {
    createOrderController,
    getOrdersController,
    getSingleOrderController,
    updateOrderStatusController
} from '@controllers/order.controller';

const router = Router();

router.post(
    '/',
    requireRole(
        UserRole.ADMIN,
        UserRole.CUSTOMER
    ),
    asyncHandler(createOrderController)
);

router.get(
    '/',
    requireRole(
        UserRole.CUSTOMER,
        UserRole.ADMIN
    ),
    asyncHandler(getOrdersController)
);

router.get(
    '/:orderId',
    requireRole(
        UserRole.CUSTOMER,
        UserRole.ADMIN
    ),
    asyncHandler(getSingleOrderController)
);

router.patch(
    '/:orderId/status',
    requireRole(
        UserRole.ADMIN,
        UserRole.CUSTOMER
    ),
    asyncHandler(updateOrderStatusController)
);

export default router;