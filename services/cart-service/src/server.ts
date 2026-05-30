import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import { connectRedis } from '@config/redis';

import { logger } from '@shared/common';

const PORT = process.env.PORT || 4003;

const bootstrap = async () => {

    await connectRedis();

    app.listen(PORT, () => {
        logger.info(
            `Cart Service running on port ${PORT}`
        );
    });
};

bootstrap();