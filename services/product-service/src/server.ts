import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import {
    connectRabbitMQ,
    connectRedisCache,
    logger
} from '@shared/common';

const PORT =
    process.env.PORT || 4002;

const bootstrap = async () => {

    await connectRabbitMQ();

    await connectRedisCache();

    app.listen(PORT, () => {

        logger.info(
            `Product Service running on port ${PORT}`
        );
    });
};

bootstrap();