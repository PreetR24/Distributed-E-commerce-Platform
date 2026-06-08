import axios from 'axios';

const API_GATEWAY_URL =
    process.env.API_GATEWAY_URL;

export const getMyOrders =
async (
    token: string
) => {

    const response =
        await axios.get(

            `${API_GATEWAY_URL}/orders/my-orders`,

            {

                headers: {

                    Authorization:
                        token
                }
            }
        );

    return response.data.data;
};