import axios from 'axios';

import {
    SERVICES
}
from '@shared/common';

const services = [

    {
        name: 'user',
        url: `${SERVICES.USER}/api/v1/health`
    },

    {
        name: 'product',
        url: `${SERVICES.PRODUCT}/api/v1/health`
    },

    {
        name: 'cart',
        url: `${SERVICES.CART}/api/v1/health`
    },

    {
        name: 'product',
        url: `${SERVICES.PRODUCT}/api/v1/health`
    },

    {
        name: 'cart',
        url: `${SERVICES.CART}/api/v1/health`
    },

    {
        name: 'order',
        url: `${SERVICES.ORDER}/api/v1/health`
    },

    {
        name: 'payment',
        url: `${SERVICES.PAYMENT}/api/v1/health`
    },

    {
        name: 'inventory',
        url: `${SERVICES.INVENTORY}/api/v1/health`
    },

    {
        name: 'search',
        url: `${SERVICES.SEARCH}/api/v1/health`  
    },

    {
        name: 'analytics',
        url: `${SERVICES.ANALYTICS}/api/v1/health`
    },

    {
        name: 'notification',
        url: `${SERVICES.NOTIFICATION}/api/v1/health`
    }
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