import {
    elasticsearchClient
} from '@config/elasticsearch';

import {
    ELASTIC_INDICES
} from '@constants/elasticsearch.constants';

import {
    productIndexMapping
} from './product.mapping';

import {
    logger
} from '@shared/common';

export const createProductIndex =
async () => {

    try {

        const exists =
            await elasticsearchClient.indices.exists({
                index:
                    ELASTIC_INDICES.PRODUCTS
            });

        logger.info({
            event: 'ELASTIC_INDEX_CHECK',
            index:
                ELASTIC_INDICES.PRODUCTS,
            exists
        });

        if (exists) {
            return;
        }

        await elasticsearchClient.indices.create({
            index:
                ELASTIC_INDICES.PRODUCTS,
            ...productIndexMapping
        });

        logger.info({
            event: 'ELASTIC_INDEX_CREATED',
            index:
                ELASTIC_INDICES.PRODUCTS
        });

    } catch (error) {

        logger.error({
            event:
                'ELASTIC_INDEX_CREATE_FAILED',
            error
        });

        throw error;
    }
};