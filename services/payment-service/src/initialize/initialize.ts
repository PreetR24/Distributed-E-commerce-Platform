import {

    bootstrapInfrastructure,

    connectRedisCache,

    connectRabbitMQ

}
from '@shared/common';

import {

    waitForOrderGrpc

}
from '../grpc/order.grpc.client';

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
                'Order gRPC',

            task:
                waitForOrderGrpc

        }

    ]);

};