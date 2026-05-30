import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import {
    connectRabbitMQ,
    connectRedisCache,
    logger
} from '@shared/common';

import {
    startProductConsumer
} from './consumers/product.consumer';

import {
    createProductIndex,
} from './search/create-index';

import {
    reindexProducts
} from './services/reindex.service';

const PORT =
    process.env.PORT || 4007;

const bootstrap = async () => {

    await connectRabbitMQ();

    await createProductIndex();

    await reindexProducts();

    await startProductConsumer();

    await connectRedisCache();

    app.listen(PORT, () => {

        logger.info(
            `Search Service running on port ${PORT}`
        );
    });
};

bootstrap();