import {
    connectRabbitMQ,
    getChannel
}
from '../messaging/rabbitmq';

import {
    logger
}
from './logger';

interface ExchangeConfig {

    name: string;

    type?:
        'fanout'
        | 'direct'
        | 'topic';

    durable?: boolean;

}

interface QueueConfig {

    name: string;

    exchange: string;

    routingKey?: string;

    durable?: boolean;

}

interface RabbitMQSetup {

    exchanges?: ExchangeConfig[];

    queues?: QueueConfig[];

}

export const setupRabbitMQ =
async (
    config: RabbitMQSetup
): Promise<void> => {

    /*
     * Make sure RabbitMQ connection
     * and channel are initialized.
     */
    await connectRabbitMQ();

    const channel =
        getChannel();

    /*
     * Setup exchanges
     */
    if (
        config.exchanges
    ) {

        for (

            const exchange

            of config.exchanges

        ) {

            await channel.assertExchange(

                exchange.name,

                exchange.type ??
                'fanout',

                {

                    durable:
                        exchange.durable ??
                        true

                }

            );

            logger.info(

                'Exchange Ready',

                {

                    exchange:
                        exchange.name

                }

            );

        }

    }

    /*
     * Setup queues
     */
    if (
        config.queues
    ) {

        for (

            const queue

            of config.queues

        ) {

            await channel.assertQueue(

                queue.name,

                {

                    durable:
                        queue.durable ??
                        true

                }

            );

            await channel.bindQueue(

                queue.name,

                queue.exchange,

                queue.routingKey ??
                ''

            );

            logger.info(

                'Queue Ready',

                {

                    queue:
                        queue.name,

                    exchange:
                        queue.exchange

                }

            );

        }

    }

};