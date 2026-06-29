import { productResolvers } from '@resolvers/product.resolver';
import { searchResolvers } from '@resolvers/search.resolver';
import { dashboardResolvers } from '@resolvers/dashboard.resolver';
import { orderResolvers } from '@resolvers/order.resolver';

export const resolvers = {
    Query: {
        ...productResolvers,
        ...searchResolvers,
        ...orderResolvers,
        ...dashboardResolvers,
    }
};