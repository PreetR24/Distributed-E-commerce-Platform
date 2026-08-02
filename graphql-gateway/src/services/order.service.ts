import axios from 'axios';
import { GraphQLContext } from '../server';

import {
    SERVICES
}
from "@config/services";

const ORDER_SERVICE_URL = `${SERVICES.ORDER}/api/v1`;

export const getMyOrders =
async (
    context: GraphQLContext
) => {

    const response =
        await axios.get(
            `${ORDER_SERVICE_URL}/orders`,
            {
                headers: {
                    Authorization: context.token
                }
            }
        );

    return response.data.data;
};