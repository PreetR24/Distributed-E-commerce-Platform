import axios from 'axios';
import { GraphQLContext } from '../server';

const API_GATEWAY_URL =
    process.env.API_GATEWAY_URL;

export const getDashboardAnalytics =
async (
    context: GraphQLContext
) => {

    const response =
        await axios.get(
            `${API_GATEWAY_URL}/analytics/dashboard`,
            {
                headers: {
                    Authorization: context.token
                }
            }
        );

    return response.data.data;
};