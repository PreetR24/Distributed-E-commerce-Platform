import axios from 'axios';
import { GraphQLContext } from '../server';

import {
    SERVICES
}
from "@config/services";

const ANALYTICS_SERVICE_URL = `${SERVICES.ANALYTICS}/api/v1`;

export const getDashboardAnalytics =
async (
    context: GraphQLContext
) => {

    const response =
        await axios.get(
            `${ANALYTICS_SERVICE_URL}/analytics/dashboard`,
            {
                headers: {
                    Authorization: context.token
                }
            }
        );

    return response.data.data;
};