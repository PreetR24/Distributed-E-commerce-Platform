import amqp from 'amqplib';

export const verifyRabbitMQ =
async () => {

    console.log(
        '\nVerifying RabbitMQ...\n'
    );

    const connection =
        await amqp.connect(
            'amqp://rabbitmq:5672'
        );

    const channel =
        await connection.createChannel();

    await channel.assertQueue(
        'verification.queue'
    );

    console.log(
        '✓ RabbitMQ Connected'
    );

    await channel.close();

    await connection.close();
};