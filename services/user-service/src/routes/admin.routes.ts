import { Router } from 'express';

import { authenticate } from '@middleware/auth.middleware';

import { authorize } from '@middleware/authorize.middleware';

import { ROLES } from '@constants/roles';

const router = Router();

router.get(
    '/',
    authenticate,
    authorize(ROLES.ADMIN),
    (_req, res) => {

        return res.status(200).json({
            success: true,
            message: 'Admin route accessed'
        });
    }
);

export default router;