"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRabbitMQ = void 0;
const rabbitmq_1 = require("../messaging/rabbitmq");
const logger_1 = require("./logger");
const setupRabbitMQ = async (config) => {
    const channel = (0, rabbitmq_1.getRabbitMQChannel)();
    if (config.exchanges) {
        for (const exchange of config.exchanges) {
            await channel.assertExchange(exchange.name, exchange.type ??
                'fanout', {
                durable: exchange.durable ??
                    true
            });
            logger_1.logger.info('Exchange Ready', {
                exchange: exchange.name
            });
        }
    }
    if (config.queues) {
        for (const queue of config.queues) {
            await channel.assertQueue(queue.name, {
                durable: queue.durable ??
                    true
            });
            await channel.bindQueue(queue.name, queue.exchange, queue.routingKey ??
                '');
            logger_1.logger.info('Queue Ready', {
                queue: queue.name,
                exchange: queue.exchange
            });
        }
    }
};
exports.setupRabbitMQ = setupRabbitMQ;
