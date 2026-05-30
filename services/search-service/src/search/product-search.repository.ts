import {
    elasticsearchClient
} from '@config/elasticsearch';

import {
    ELASTIC_INDICES
} from '@constants/elasticsearch.constants';

import {
    SearchQuery
} from '@interfaces/search.interface';

export const elasticSearchProducts = async (
    query: SearchQuery
) => {
    const {
        search,
        categoryId,
        minPrice,
        maxPrice,
        isActive,
        page = 1,
        limit = 10,
        sortBy = 'createdAt',
        sortOrder = 'desc'
    } = query;

    const must: any[] = [];
    const filter: any[] = [];

    if (search?.trim()) {
        must.push({
            multi_match: {
                query: search,
                fields: [
                    'name^3',
                    'description',
                    'categoryName'
                ],
                fuzziness: 'AUTO'
            }
        });
    }

    if (categoryId) {
        filter.push({
            term: {
                categoryId
            }
        });
    }

    if (
        minPrice !== undefined ||
        maxPrice !== undefined
    ) {
        filter.push({
            range: {
                price: {
                    ...(minPrice !== undefined
                        ? { gte: minPrice }
                        : {}),
                    ...(maxPrice !== undefined
                        ? { lte: maxPrice }
                        : {})
                }
            }
        });
    }

    if (
        typeof isActive === 'boolean'
    ) {
        filter.push({
            term: {
                isActive
            }
        });
    }

    const result =
        await elasticsearchClient.search({

            index:
                ELASTIC_INDICES.PRODUCTS,

            // Exclude suggest field from response
            _source: {
                excludes: ['suggest']
            },

            track_total_hits: true,

            from:
                (page - 1) * limit,

            size:
                limit,

            query: {
                bool: {
                    ...(must.length
                        ? { must }
                        : {}),
                    ...(filter.length
                        ? { filter }
                        : {})
                }
            },

            sort: [
                {
                    [sortBy]: {
                        order:
                            sortOrder
                    }
                }
            ]
        });

    const total =
        typeof result.hits.total === 'number'
            ? result.hits.total
            : Number(
                  result.hits.total?.value ?? 0
              );

    return {
        products:
            result.hits.hits.map(
                hit => hit._source
            ),

        pagination: {
            total,
            page,
            limit,
            totalPages:
                Math.ceil(
                    total / limit
                )
        }
    };
};