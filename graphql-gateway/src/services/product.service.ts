import axios from 'axios';
import {GraphQLContext} from '../server';

import {
    SERVICES
}
from "@config/services";

const PRODUCT_SERVICE_URL = `${SERVICES.PRODUCT}/api/v1`;

export const getProducts =
async (
    page = 1,
    limit = 10,
    context: GraphQLContext
) => {

    const response =
        await axios.get(

            `${PRODUCT_SERVICE_URL}/products`,

            {
                params: {
                    page,
                    limit
                },
                headers: {
                    Authorization: context.token
                }
            }
        );

    const products =
        response.data.data;

    return {

        products,

        pagination: {

            total:
                products.length,

            page,

            limit,

            totalPages:
                Math.ceil(
                    products.length / limit
                )
        }
    };
};

export const getProductById =
async (
    id: string,
    context: GraphQLContext
) => {

    const response =
        await axios.get(

            `${PRODUCT_SERVICE_URL}/products/${id}`,

            {

                headers: {

                    Authorization:
                        context.token
                }
            }
        );

    return response.data.data;
};