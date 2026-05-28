import { Router } from 'express';

import { asyncHandler }
from '@shared/common';

import {
    paymentWebhookController
} from '@controllers/webhook.controller';

const router = Router();

router.post(
    '/',
    asyncHandler(paymentWebhookController)
);

export default router;