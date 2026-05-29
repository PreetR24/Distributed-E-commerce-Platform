import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import {
    connectRabbitMQ,
    connectRedisCache
} from '@shared/common';

const PORT =
    process.env.PORT || 4002;

const bootstrap = async () => {

    await connectRabbitMQ();

    await connectRedisCache();

    app.listen(PORT, () => {

        console.log(
            `Product Service running on port ${PORT}`
        );
    });
};

bootstrap();