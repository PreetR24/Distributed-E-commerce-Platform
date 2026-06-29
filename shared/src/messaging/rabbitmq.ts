import amqp from 'amqplib';
import {logger} from "../utils/logger"

import {
    publishedEvents,
    consumedEvents
}
from '../metrics/infrastructure.metrics';

let channel: amqp.Channel;

export const connectRabbitMQ = async () => {

    const connection =
        await amqp.connect(
            'amqp://rabbitmq:5672'
        );

    channel =
        await connection.createChannel();

    logger.info(
        'Connected To RabbitMQ'
    );
};

export const publishEvent = async (
    exchange: string,
    routingKey: string,
    message: unknown
) => {

    await channel.assertExchange(
        exchange,
        'fanout',
        {
            durable: true
        }
    );

    channel.publish(
        exchange,
        routingKey,
        Buffer.from(
            JSON.stringify(message)
        )
    );

    publishedEvents.inc();

    logger.info(
        'Event Published',
        {
            exchange,
            routingKey,
            payload: message
        }
    );
};

export const consumeEvent = async (
    exchange: string,
    queue: string,
    callback: (data: any) => Promise<void>
) => {

    await channel.assertExchange(
        exchange,
        'fanout',
        {
            durable: true
        }
    );

    const assertedQueue =
        await channel.assertQueue(
            queue,
            {
                durable: true
            }
        );

    await channel.bindQueue(
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

    channel.consume(
        assertedQueue.queue,

        async (message) => {

            if (!message) {
                return;
            }

            const parsedMessage =
                JSON.parse(
                    message.content.toString()
                );

            try {
                await callback(parsedMessage);
                consumedEvents.inc();
                channel.ack(message);
            }
            catch (error) {
                logger.error(
                    'RabbitMQ Consumer Error:',
                    error
                );
                channel.ack(message);
            }

            logger.info(
                'Message Acknowledged',
                {
                    queue,
                    exchange
                }
            );
        }
    );
};