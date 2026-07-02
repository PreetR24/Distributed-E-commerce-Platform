"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumeEvent = exports.publishEvent = exports.disconnectRabbitMQ = exports.connectRabbitMQ = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const logger_1 = require("../utils/logger");
const infrastructure_metrics_1 = require("../metrics/infrastructure.metrics");
let connection = null;
let channel = null;
const getChannel = () => {
    if (!channel) {
        throw new Error('RabbitMQ channel has not been initialized.');
    }
    return channel;
};
const connectRabbitMQ = async () => {
    if (connection &&
        channel) {
        return;
    }
    connection =
        await amqplib_1.default.connect(process.env.RABBITMQ_URL ||
            'amqp://rabbitmq:5672');
    channel =
        await connection.createChannel();
    logger_1.logger.info('Connected To RabbitMQ');
};
exports.connectRabbitMQ = connectRabbitMQ;
const disconnectRabbitMQ = async () => {
    if (channel) {
        await channel.close();
        channel =
            null;
    }
    if (connection) {
        await connection.close();
        connection =
            null;
    }
    logger_1.logger.info('Disconnected From RabbitMQ');
};
exports.disconnectRabbitMQ = disconnectRabbitMQ;
const publishEvent = async (exchange, routingKey, message) => {
    const rabbitChannel = getChannel();
    await rabbitChannel.assertExchange(exchange, 'fanout', {
        durable: true
    });
    rabbitChannel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)));
    infrastructure_metrics_1.publishedEvents.inc();
    logger_1.logger.info('Event Published', {
        exchange,
        routingKey,
        payload: message
    });
};
exports.publishEvent = publishEvent;
const consumeEvent = async (exchange, queue, callback) => {
    const rabbitChannel = getChannel();
    await rabbitChannel.assertExchange(exchange, 'fanout', {
        durable: true
    });
    const assertedQueue = await rabbitChannel.assertQueue(queue, {
        durable: true
    });
    await rabbitChannel.bindQueue(assertedQueue.queue, exchange, '');
    logger_1.logger.info('Queue Bound To Exchange', {
        queue,
        exchange
    });
    rabbitChannel.consume(assertedQueue.queue, async (message) => {
        if (!message) {
            return;
        }
        const parsedMessage = JSON.parse(message.content.toString());
        try {
            await callback(parsedMessage);
            infrastructure_metrics_1.consumedEvents.inc();
            rabbitChannel.ack(message);
            logger_1.logger.info('Message Processed', {
                queue,
                exchange
            });
        }
        catch (error) {
            logger_1.logger.error('RabbitMQ Consumer Error', error);
            rabbitChannel.ack(message);
        }
    });
};
exports.consumeEvent = consumeEvent;
