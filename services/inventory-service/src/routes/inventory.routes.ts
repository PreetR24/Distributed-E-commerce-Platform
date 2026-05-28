import { Router }
from 'express';

import { asyncHandler }
from '@shared/common';

import {
    createInventoryController,
    getInventoryController
} from '@controllers/inventory.controller';

const router = Router();

router.post(
    '/',
    asyncHandler(createInventoryController)
);

router.get(
    '/',
    asyncHandler(getInventoryController)
);

export default router;