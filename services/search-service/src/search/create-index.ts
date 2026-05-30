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

export const createProductIndex =
async () => {

    console.log(
    'CREATE INDEX STARTED'
);

const exists =
    await elasticsearchClient.indices.exists({

        index:
            ELASTIC_INDICES.PRODUCTS
    });

console.log(
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