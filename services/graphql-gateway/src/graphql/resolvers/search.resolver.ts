import {
    searchProducts
}
from '@services/search.service';

export const searchResolvers = {

    searchProducts:
    async (
        _: unknown,

        args: {

            search: string;

            page?: number;

            limit?: number;
        }
    ) => {

        return searchProducts(

            args.search,

            args.page,

            args.limit
        );
    }
};