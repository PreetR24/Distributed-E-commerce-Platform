import {
    getProducts
}
from '@services/product.service';

import {
    searchProducts,
    getTrendingSearches
}
from '@services/search.service';

import {
    getDashboardAnalytics
}
from '@services/analytics.service';

import {
    GraphQLContext
}
from '../../server';

export const dashboardResolvers = {

    dashboard:
    async (

        _: unknown,

        args: {

            search: string;
        },

        context: GraphQLContext

    ) => {

        const [

            products,

            searchResults,

            analytics,

            trendingSearches

        ] = await Promise.all([

            getProducts(
                1,
                10,
                context
            ),

            searchProducts(
                args.search,
                1,
                10,
                context
            ),

            getDashboardAnalytics(
                context
            ),

            getTrendingSearches(
                context
            )
        ]);

        return {

            products,

            searchResults,

            analytics,

            trendingSearches
        };
    }
};