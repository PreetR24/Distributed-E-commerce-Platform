"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumedEventsCounter = exports.publishedEventsCounter = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
exports.publishedEventsCounter = new prom_client_1.default.Counter({
    name: "rabbitmq_events_published_total",
    help: "Total RabbitMQ events published"
});
exports.consumedEventsCounter = new prom_client_1.default.Counter({
    name: "rabbitmq_events_consumed_total",
    help: "Total RabbitMQ events consumed"
});
