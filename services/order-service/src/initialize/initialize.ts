import {

    bootstrapInfrastructure,

    connectRabbitMQ,

    connectRedisCache

}
from '@shared/common';

import {

    startPaymentFailureConsumer

}
from '../consumers/payment.consumer';

import {

    startInventoryFailureConsumer

}
from '../consumers/inventory.consumer';

import {

    waitForProductGrpc

}
from '../grpc/product.grpc.client';

import {

    waitForInventoryGrpc

}
from '../grpc/inventory.grpc.client';

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
                'Payment Failure Consumer',

            task:
                startPaymentFailureConsumer

        },

        {

            name:
                'Inventory Failure Consumer',

            task:
                startInventoryFailureConsumer

        },

        {

            name:
                'Product gRPC',

            task:
                waitForProductGrpc

        },

        {

            name:
                'Inventory gRPC',

            task:
                waitForInventoryGrpc

        }

    ]);

};