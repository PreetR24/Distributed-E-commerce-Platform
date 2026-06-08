import {
    getProducts
}
from '@services/product.service';

import {
    searchProducts
}
from '@services/search.service';

export const dashboardResolvers = {

    dashboard:
    async (

        _: unknown,

        args: {

            search: string;
        }

    ) => {

        const [

            products,

            searchResults

        ] = await Promise.all([

            getProducts(),

            searchProducts(
                args.search
            )
        ]);

        return {

            products,

            searchResults
        };
    }
};