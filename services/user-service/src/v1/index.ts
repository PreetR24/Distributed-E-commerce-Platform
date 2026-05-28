import { Router } from 'express';

import authRoutes from '@routes/auth.routes';

import userRoutes from '@routes/user.routes';

import adminRoutes from '@routes/admin.routes';

const router = Router();

router.use('/auth', authRoutes);

router.use('/users', userRoutes);

router.use('/admin', adminRoutes);

export default router;