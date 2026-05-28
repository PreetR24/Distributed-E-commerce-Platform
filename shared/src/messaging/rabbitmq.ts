import amqp from 'amqplib';

let channel: amqp.Channel;

export const connectRabbitMQ = async () => {

    console.log(
        'Connecting To RabbitMQ...'
    );

    const connection =
        await amqp.connect(
            'amqp://localhost:5672'
        );

    channel =
        await connection.createChannel();

    console.log(
        'RabbitMQ Connected'
    );
};

export const publishEvent = async (
    exchange: string,
    routingKey: string,
    message: unknown
) => {

    console.log(
        `Publishing Event To Exchange: ${exchange}`
    );

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

    console.log(
        'Event Published Successfully'
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

    console.log(
        `Queue ${queue} bound to ${exchange}`
    );

    channel.consume(
        assertedQueue.queue,

        async (message) => {

            if (!message) {
                return;
            }

            console.log(
                `Message Received From ${queue}`
            );

            const parsedMessage =
                JSON.parse(
                    message.content.toString()
                );

            await callback(parsedMessage);

            channel.ack(message);

            console.log(
                `Message Acknowledged From ${queue}`
            );
        }
    );
};