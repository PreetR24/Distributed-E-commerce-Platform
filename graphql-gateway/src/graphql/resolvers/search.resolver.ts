import {
    searchProducts,
    autocompleteProducts,
    getTrendingSearches
}
from '@services/search.service';

import {
    GraphQLContext
}
from '../../server';

export const searchResolvers = {

    searchProducts:
        async (
            _: unknown,
            args: {
                search: string;
                page?: number;
                limit?: number;
            },
            context: GraphQLContext
        ) => {
            return searchProducts(
                args.search,
                args.page,
                args.limit,
                context
            );
        },

    autocomplete:
        async (
            _: unknown,
            args: {
                query: string;
            },
            context: GraphQLContext
        ) => {
            return autocompleteProducts(
                args.query,
                context
            );
        },

    trendingSearches:
        async (
            _: unknown,
            __: unknown,
            context: GraphQLContext
        ) => {
            return getTrendingSearches(
                context
            );
        }
};