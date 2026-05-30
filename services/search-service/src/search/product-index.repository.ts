import {
    elasticsearchClient
}
from '@config/elasticsearch';

import {
    ELASTIC_INDICES
}
from '@constants/elasticsearch.constants';

export const indexProduct =
async (
    product: any
) => {

    await elasticsearchClient.index({
        index: ELASTIC_INDICES.PRODUCTS,
        id: product.id,
        refresh: true,
        document: {
            ...product,
            suggest: {
                input: [
                    product.name
                ]
            }
        }
    });
};