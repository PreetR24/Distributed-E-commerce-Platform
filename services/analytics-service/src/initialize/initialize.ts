import {

    bootstrapInfrastructure,

    connectRabbitMQ,

    connectRedisCache

}
from '@shared/common';

import {

    initializeMetrics

}
from '@repositories/analytics.repository';

import {

    startOrderAnalyticsConsumer

}
from '../consumers/order.consumer';

import {

    startPaymentAnalyticsConsumer

}
from '../consumers/payment.consumer';

import {

    startProductAnalyticsConsumer

}
from '../consumers/product.consumer';

export const initialize =
async (): Promise<void> => {

    await bootstrapInfrastructure([

        {

            name:
                'Redis',

            task:
                connectRedisCache

        },

        {

            name:
                'RabbitMQ',

            task:
                connectRabbitMQ

        },

        {

            name:
                'Initialize Metrics',

            task:
                initializeMetrics

        },

        {

            name:
                'Order Analytics Consumer',

            task:
                startOrderAnalyticsConsumer

        },

        {

            name:
                'Payment Analytics Consumer',

            task:
                startPaymentAnalyticsConsumer

        },

        {

            name:
                'Product Analytics Consumer',

            task:
                startProductAnalyticsConsumer

        }

    ]);

};