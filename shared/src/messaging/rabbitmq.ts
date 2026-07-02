import amqp
from 'amqplib';

import {

    logger

}
from '../utils/logger';

import {

    publishedEventsCounter,

    consumedEventsCounter

}
from '../metrics/rabbitmq.metrics';

let connection:
    amqp.ChannelModel  | null =
    null;

let channel:
    amqp.Channel | null =
    null;

const getChannel =
(): amqp.Channel => {

    if (
        !channel
    ) {

        throw new Error(
            'RabbitMQ channel has not been initialized.'
        );

    }

    return channel;

};

export const connectRabbitMQ =
async (): Promise<void> => {

    if (
        connection &&
        channel
    ) {

        return;

    }

    connection =
        await amqp.connect(

            process.env.RABBITMQ_URL ||

            'amqp://rabbitmq:5672'

        );

    channel =
        await connection.createChannel();

    logger.info(
        'Connected To RabbitMQ'
    );

};

export const disconnectRabbitMQ =
async (): Promise<void> => {

    if (
        channel
    ) {

        await channel.close();

        channel =
            null;

    }

    if (
        connection
    ) {

        await connection.close();

        connection =
            null;

    }

    logger.info(
        'Disconnected From RabbitMQ'
    );

};

export const publishEvent =
async (

    exchange: string,

    routingKey: string,

    message: unknown

): Promise<void> => {

    const rabbitChannel =
        getChannel();

    await rabbitChannel.assertExchange(

        exchange,

        'fanout',

        {

            durable: true

        }

    );

    rabbitChannel.publish(

        exchange,

        routingKey,

        Buffer.from(

            JSON.stringify(
                message
            )

        )

    );

    publishedEventsCounter.inc();

    logger.info(

        'Event Published',

        {

            exchange,

            routingKey,

            payload:
                message

        }

    );

};

export const consumeEvent =
async (

    exchange: string,

    queue: string,

    callback:
        (
            data: any
        ) => Promise<void>

): Promise<void> => {

    const rabbitChannel =
        getChannel();

    await rabbitChannel.assertExchange(

        exchange,

        'fanout',

        {

            durable: true

        }

    );

    const assertedQueue =

        await rabbitChannel.assertQueue(

            queue,

            {

                durable: true

            }

        );

    await rabbitChannel.bindQueue(

        assertedQueue.queue,

        exchange,

        ''

    );

    logger.info(

        'Queue Bound To Exchange',

        {

            queue,

            exchange

        }

    );

    rabbitChannel.consume(

        assertedQueue.queue,

        async (

            message

        ) => {

            if (
                !message
            ) {

                return;

            }

            const parsedMessage =

                JSON.parse(

                    message.content.toString()

                );

            try {

                await callback(

                    parsedMessage

                );

                consumedEventsCounter.inc();

                rabbitChannel.ack(

                    message

                );

                logger.info(

                    'Message Processed',

                    {

                        queue,

                        exchange

                    }

                );

            }

            catch (

                error

            ) {

                logger.error(

                    'RabbitMQ Consumer Error',

                    error

                );

                rabbitChannel.ack(

                    message

                );

            }

        }

    );

};