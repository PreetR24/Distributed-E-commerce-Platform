import {
    elasticsearchClient
} from '@config/elasticsearch';

import {
    ELASTIC_INDICES
} from '@constants/elasticsearch.constants';

export const autocompleteProducts =
async (
    query: string
) => {

    const result =
        await elasticsearchClient.search({
            index:
                ELASTIC_INDICES.PRODUCTS,
            suggest: {
                product_suggest: {
                    prefix: query,
                    completion: {
                        field:
                            'suggest',
                        skip_duplicates:
                            true,
                        size:
                            10
                    }
                }
            }
        });

    const options = result.suggest
        ?.product_suggest?.[0]
        ?.options;

    return (Array.isArray(options) ? options : options ? [options] : [])
        .map(option => option.text);
};