import {
    getMyOrders
}
from '@services/order.service';

export const orderResolvers = {

    myOrders:
    async (

        _: unknown,

        __: unknown,

        context: {

            token: string;
        }

    ) => {

        if (
            !context.token
        ) {

            throw new Error(
                'Unauthorized'
            );
        }

        return getMyOrders(
            context.token
        );
    }
};