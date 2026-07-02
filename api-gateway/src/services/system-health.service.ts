import axios from 'axios';

import {
    SERVICES
}
from '@shared/common';

const services = [

    {
        name: 'user service',
        url: `${SERVICES.USER}/api/v1/health`
    },

    {
        name: 'product service',
        url: `${SERVICES.PRODUCT}/api/v1/health`
    },

    {
        name: 'cart service',
        url: `${SERVICES.CART}/api/v1/health`
    },

    {
        name: 'order service',
        url: `${SERVICES.ORDER}/api/v1/health`
    },

    {
        name: 'payment service',
        url: `${SERVICES.PAYMENT}/api/v1/health`
    },

    {
        name: 'inventory service',
        url: `${SERVICES.INVENTORY}/api/v1/health`
    },

    {
        name: 'search service',
        url: `${SERVICES.SEARCH}/api/v1/health`  
    },

    {
        name: 'analytics service',
        url: `${SERVICES.ANALYTICS}/api/v1/health`
    },

    {
        name: 'notification service',
        url: `${SERVICES.NOTIFICATION}/api/v1/health`
    },

    {
        name: 'graphql gateway service',
        url: `${SERVICES.GRAPHQL}/api/v1/health`
    },
];

export const getSystemHealth =
async () => {
    const results =
        await Promise.allSettled(

            services.map(

                service =>
                    axios.get(
                        service.url
                    )
            )
        );

    return results.map(
        (
            result,
            index
        ) => ({

            service:
                services[index].name,

            status:
                result.status ===
                'fulfilled'
                    ? 'UP'
                    : 'DOWN'
        })
    );
};