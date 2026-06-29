import axios from 'axios';
import { GraphQLContext } from '../server';

const API_GATEWAY_URL =
    process.env.API_GATEWAY_URL;

export const searchProducts =
async (
    search: string,
    page = 1,
    limit = 10,
    context: GraphQLContext
) => {

    const response =
        await axios.get(

            `${API_GATEWAY_URL}/search`,

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

            `${API_GATEWAY_URL}/search/autocomplete`,

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

            `${API_GATEWAY_URL}/search/trending`,

            {

                headers: {

                    Authorization:
                        context.token
                }
            }
        );

    return response.data.data;
};