import { Router } from 'express';

import { asyncHandler }
from '@shared/common';

import {
    createPaymentController,
    getUserPaymentsController
} from '@controllers/payment.controller';

const router = Router();

router.post(
    '/',
    asyncHandler(createPaymentController)
);

router.get(
    '/',
    asyncHandler(getUserPaymentsController)
);

export default router;