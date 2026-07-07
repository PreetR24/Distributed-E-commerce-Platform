import { Router } from 'express';
import { currentUserController } from '@controllers/user.controller';

import { asyncHandler, authenticateRequest }
from '@shared/common';

const router = Router();

router.get(
    '/me',
    asyncHandler(currentUserController)
);

export default router;