import {
    bootstrapInfrastructure,
    connectRedisCache,
    connectRabbitMQ
}
from '@shared/common';

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

        }

    ]);

};