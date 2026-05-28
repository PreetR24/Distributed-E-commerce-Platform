import { Router } from 'express';
import { currentUserController } from '@controllers/user.controller';
import { authenticate } from '@middleware/auth.middleware';

import { asyncHandler }
from '@shared/common';

const router = Router();

router.get(
    '/me',
    authenticate,
    asyncHandler(currentUserController)
);

export default router;