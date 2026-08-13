import {
    getAnalytics
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
        return getAnalytics(
            context
        );
    }
};