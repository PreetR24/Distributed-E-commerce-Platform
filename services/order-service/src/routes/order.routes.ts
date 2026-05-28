import { Router } from 'express';

import { asyncHandler } from '@shared/common';

import {
    createOrderController,
    getOrdersController,
    getSingleOrderController,
    updateOrderStatusController
} from '@controllers/order.controller';

const router = Router();

router.post(
    '/',
    asyncHandler(createOrderController)
);

router.get(
    '/',
    asyncHandler(getOrdersController)
);

router.get(
    '/:orderId',
    asyncHandler(getSingleOrderController)
);

router.patch(
    '/:orderId/status',
    asyncHandler(updateOrderStatusController)
);

export default router;