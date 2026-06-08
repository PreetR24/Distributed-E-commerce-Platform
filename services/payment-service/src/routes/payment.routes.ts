import { Router } from 'express';

import { asyncHandler, requireRole, UserRole }
from '@shared/common';

import {
    createPaymentController,
    getUserPaymentsController
} from '@controllers/payment.controller';

const router = Router();

router.post(
    '/',
    requireRole(
        UserRole.CUSTOMER
    ),
    asyncHandler(createPaymentController)
);

router.get(
    '/',
    requireRole(
        UserRole.CUSTOMER,
        UserRole.ADMIN
    ),
    asyncHandler(getUserPaymentsController)
);

export default router;