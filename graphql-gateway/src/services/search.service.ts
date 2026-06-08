import axios from 'axios';

const SEARCH_SERVICE_URL =
    process.env.API_GATEWAY_URL;

export const searchProducts =
async (
    search: string,
    page = 1,
    limit = 10
) => {

    const response =
        await axios.get(

            `${SEARCH_SERVICE_URL}/search`,

            {
                params: {

                    search,

                    page,

                    limit
                }
            }
        );

    return response.data.data;
};