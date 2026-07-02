import {

    bootstrapInfrastructure,

    connectRabbitMQ,

    connectRedisCache

}
from '@shared/common';

import {

    waitForProductGrpc

}
from '../grpc/product.grpc.client';

import {

    waitForElasticsearch

}
from '../search/waitForElasticsearch';

import {

    synchronizeProducts

}
from '../services/product-sync.service';

import {

    reindexProducts

}
from '../services/reindex.service';

import {

    startProductConsumer

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
                'Product gRPC',

            task:
                waitForProductGrpc

        },

        {

            name:
                'Elasticsearch',

            task:
                waitForElasticsearch

        },

        {

            name:
                'Synchronize Products',

            task:
                synchronizeProducts

        },

        {

            name:
                'Reindex Products',

            task:
                reindexProducts

        },

        {

            name:
                'Product Consumer',

            task:
                startProductConsumer

        }

    ]);

};