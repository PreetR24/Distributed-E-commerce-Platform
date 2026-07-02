import {

    bootstrapInfrastructure,

    connectRabbitMQ,

    connectRedisCache

}
from '@shared/common';

import {

    startOrderConsumer

}
from '../consumers/order.consumer';

import {

    startPaymentFailureConsumer

}
from '../consumers/payment.consumer';

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
                'Order Consumer',

            task:
                startOrderConsumer

        },

        {

            name:
                'Payment Failure Consumer',

            task:
                startPaymentFailureConsumer

        }

    ]);

};