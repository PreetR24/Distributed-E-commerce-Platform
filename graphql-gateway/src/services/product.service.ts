import axios from 'axios';

import { env }
from '@config/env';

export const getProducts =
async (
    page = 1,
    limit = 10
) => {

    const response =
        await axios.get(

            `${env.apiGatewayUrl}/products`,

            {
                params: {
                    page,
                    limit
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