import {
    getProducts
}
from '@services/product.service';

export const productResolvers = {

    products:
    async (
        _: unknown,

        args: {
            page?: number;
            limit?: number;
        }
    ) => {

        return getProducts(

            args.page,

            args.limit
        );
    }
};