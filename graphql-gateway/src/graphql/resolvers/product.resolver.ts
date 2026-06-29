import {
    getProducts,
    getProductById
}
from '@services/product.service';

import { GraphQLContext } from '../../server';

export const productResolvers = {

    product:
        async (
            _: unknown,
            args: {
                id: string
            },
            context: GraphQLContext

        ) => {
            return getProductById(
                args.id,
                context
            );
        },

    products:
        async (
            _: unknown,

            args: {
                page?: number;
                limit?: number;
            },
            context: GraphQLContext
        ) => {

            return getProducts(
                args.page,
                args.limit,
                context
            );
        }
};