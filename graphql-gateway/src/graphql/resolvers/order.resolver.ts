import {
    getMyOrders
}
from '@services/order.service';
import { GraphQLContext } from '../../server';

export const orderResolvers = {

    myOrders:
    async (
        _: unknown,
        __: unknown,
        context: GraphQLContext
    ) => {

        if (
            !context.token
        ) {
            throw new Error(
                'Unauthorized'
            );
        }
        return getMyOrders(
            context
        );
    }
};