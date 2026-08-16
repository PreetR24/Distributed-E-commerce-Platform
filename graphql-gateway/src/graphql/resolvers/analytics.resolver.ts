import {
    getDashboardAnalytics
}
from '@services/analytics.service';

import {
    GraphQLContext
}
from '../../server';

export const analyticsResolvers = {

    analytics:
    async (
        _: unknown,
        __: unknown,
        context: GraphQLContext
    ) => {
        return getDashboardAnalytics(
            context
        );
    }
};