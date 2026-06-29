"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INFRASTRUCTURE = void 0;
exports.INFRASTRUCTURE = {
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_URL: process.env.REDIS_URL,
    RABBITMQ_URL: process.env.RABBITMQ_URL,
    ELASTICSEARCH_URL: process.env.ELASTICSEARCH_URL,
    PROMETHEUS_URL: process.env.PROMETHEUS_URL,
    GRAFANA_URL: process.env.GRAFANA_URL
};
