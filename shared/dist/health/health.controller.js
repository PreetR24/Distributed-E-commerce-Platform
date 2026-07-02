"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHealthController = void 0;
const health_service_1 = require("./health.service");
const createHealthController = (serviceName) => {
    return {
        health: (_req, res) => {
            return res.json((0, health_service_1.getHealthStatus)(serviceName));
        },
        live: (_req, res) => {
            return res.json((0, health_service_1.getLivenessStatus)(serviceName));
        },
        ready: (_req, res) => {
            return res.json((0, health_service_1.getReadinessStatus)(serviceName));
        }
    };
};
exports.createHealthController = createHealthController;
