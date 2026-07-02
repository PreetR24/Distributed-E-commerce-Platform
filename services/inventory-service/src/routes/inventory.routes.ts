import { Router } from "express";

import {
    asyncHandler,
    requireRole,
    UserRole
} from "@shared/common";

import {
    createInventoryController,
    getInventoryController,
}
from "@controllers/inventory.controller";

const router = Router();

router.post(
    "/",
    requireRole(
        UserRole.ADMIN,
        UserRole.SELLER
    ),
    asyncHandler(
        createInventoryController
    )
);

router.get(
    "/",
    requireRole(
        UserRole.ADMIN,
        UserRole.SELLER
    ),
    asyncHandler(
        getInventoryController
    )
);

export default router;