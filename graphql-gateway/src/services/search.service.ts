import axios from 'axios';
import { GraphQLContext } from '../server';

import {
    SERVICES
}
from "@config/services";

const SEARCH_SERVICE_URL = `${SERVICES.SEARCH}/api/v1`;

export const searchProducts =
async (
    search: string,
    page = 1,
    limit = 10,
    context: GraphQLContext
) => {

    const response =
        await axios.get(

            `${SEARCH_SERVICE_URL}/search`,

            {
                params: {

                    search,

                    page,

                    limit
                },
                headers: {
                    Authorization: context.token
                }
            }
        );

    return response.data.data;
};

export const autocompleteProducts =
async (

    query: string,

    context: GraphQLContext

) => {

    const response =
        await axios.get(

            `${SEARCH_SERVICE_URL}/search/autocomplete`,

            {

                params: {

                    q: query
                },

                headers: {

                    Authorization:
                        context.token
                }
            }
        );

    return response.data.data;
};

export const getTrendingSearches =
async (
    context: GraphQLContext
) => {

    const response =
        await axios.get(

            `${SEARCH_SERVICE_URL}/search/trending`,

            {

                headers: {

                    Authorization:
                        context.token
                }
            }
        );

    return response.data.data;
};