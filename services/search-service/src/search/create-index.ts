import {
    elasticsearchClient
}
from '@config/elasticsearch';

import {
    ELASTIC_INDICES
}
from '@constants/elasticsearch.constants';

import {
    productIndexMapping
}
from './product.mapping';
import { logger } from '@shared/common';

export const createProductIndex =
async () => {

    const exists =
        await elasticsearchClient.indices.exists({

            index:
                ELASTIC_INDICES.PRODUCTS
        });

    logger.info(
        'INDEX EXISTS:',
        exists
    );

    if (exists) {

        return;
    }

    await elasticsearchClient.indices.create({

        index:
            ELASTIC_INDICES.PRODUCTS,

        ...productIndexMapping
    });
};