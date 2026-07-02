import {
    getCache,
    setCache,
    logger
} from '@shared/common';

import {
    SEARCH_CACHE
} from '@constants/cache.constants';

import {
    searchProducts
} from '@repositories/search.repository';

import {
    incrementSearchTerm,
    getTrendingSearches
} from '@repositories/search-analytics.repository';

import {
    SearchQuery
} from '@interfaces/search.interface';


import {
    autocompleteProducts
} from '@search/autocomplete.repository';
import { elasticSearchProducts } from '@search/product-search.repository';

import {
    searchOperationCounter,
    searchOperationDuration
}
from "@shared/common/metrics";

export const searchProductsService =
async (
    query: SearchQuery
) => {

    const endTimer = searchOperationDuration.startTimer();

    try{
        const cacheKey =
            SEARCH_CACHE.SEARCH_RESULTS(
                JSON.stringify(query)
            );

        const cachedData =
            await getCache(
                cacheKey
            );

        if (cachedData) {

            return JSON.parse(
                cachedData
            );
        }

        let result;

        try {
            result =
                await elasticSearchProducts(
                    query
                );

        } catch (error) {

            result =
                await searchProducts(
                    query
                );
        }

        if (
            query.search &&
            query.search.trim()
        ) {

            await incrementSearchTerm(
                query.search.trim()
            );
        }

        await setCache(
            cacheKey,
            result,
            300
        );

        logger.info(
            `SEARCH RESULTS CACHED: ${cacheKey}`
        );

        searchOperationCounter.inc({
            operation: "QUERY"
        });

        return result;
    } finally {
        endTimer();
    }
};

export const getTrendingSearchesService =
async () => {

    const cache =
        await getCache(
            SEARCH_CACHE.TRENDING_SEARCHES
        );

    if (cache) {

        return JSON.parse(cache);
    }

    const result =
        await getTrendingSearches();

    await setCache(
        SEARCH_CACHE.TRENDING_SEARCHES,
        result,
        300
    );

    searchOperationCounter.inc({
        operation: "TRENDING SEARCH"
    });

    logger.info(
        'TRENDING SEARCHES CACHED'
    );

    return result;
};

export const autocompleteProductsService =
async (
    query: string
) => {

    if (!query.trim()) {

        return [];
    }

    searchOperationCounter.inc({
        operation: "AUTOCOMPLETE"
    });

    return autocompleteProducts(
        query
    );
};