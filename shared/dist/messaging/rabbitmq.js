"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumeEvent = exports.publishEvent = exports.connectRabbitMQ = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
let channel;
const connectRabbitMQ = async () => {
    console.log('Connecting To RabbitMQ...');
    const connection = await amqplib_1.default.connect('amqp://localhost:5672');
    channel =
        await connection.createChannel();
    console.log('RabbitMQ Connected');
};
exports.connectRabbitMQ = connectRabbitMQ;
const publishEvent = async (exchange, routingKey, message) => {
    console.log(`Publishing Event To Exchange: ${exchange}`);
    await channel.assertExchange(exchange, 'fanout', {
        durable: true
    });
    channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)));
    console.log('Event Published Successfully');
};
exports.publishEvent = publishEvent;
const consumeEvent = async (exchange, queue, callback) => {
    await channel.assertExchange(exchange, 'fanout', {
        durable: true
    });
    const assertedQueue = await channel.assertQueue(queue, {
        durable: true
    });
    await channel.bindQueue(assertedQueue.queue, exchange, '');
    console.log(`Queue ${queue} bound to ${exchange}`);
    channel.consume(assertedQueue.queue, async (message) => {
        if (!message) {
            return;
        }
        console.log(`Message Received From ${queue}`);
        const parsedMessage = JSON.parse(message.content.toString());
        await callback(parsedMessage);
        channel.ack(message);
        console.log(`Message Acknowledged From ${queue}`);
    });
};
exports.consumeEvent = consumeEvent;
