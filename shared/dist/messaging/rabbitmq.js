"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumeEvent = exports.publishEvent = exports.connectRabbitMQ = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const logger_1 = require("../utils/logger");
const infrastructure_metrics_1 = require("../metrics/infrastructure.metrics");
let channel;
const connectRabbitMQ = async () => {
    const connection = await amqplib_1.default.connect('amqp://rabbitmq:5672');
    channel =
        await connection.createChannel();
    logger_1.logger.info('Connected To RabbitMQ');
};
exports.connectRabbitMQ = connectRabbitMQ;
const publishEvent = async (exchange, routingKey, message) => {
    await channel.assertExchange(exchange, 'fanout', {
        durable: true
    });
    channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)));
    infrastructure_metrics_1.publishedEvents.inc();
    logger_1.logger.info('Event Published', {
        exchange,
        routingKey,
        payload: message
    });
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
    logger_1.logger.info('Queue Bound To Exchange', {
        queue,
        exchange
    });
    channel.consume(assertedQueue.queue, async (message) => {
        if (!message) {
            return;
        }
        const parsedMessage = JSON.parse(message.content.toString());
        try {
            await callback(parsedMessage);
            infrastructure_metrics_1.consumedEvents.inc();
            channel.ack(message);
        }
        catch (error) {
            logger_1.logger.error('RabbitMQ Consumer Error:', error);
            channel.ack(message);
        }
        logger_1.logger.info('Message Acknowledged', {
            queue,
            exchange
        });
    });
};
exports.consumeEvent = consumeEvent;
