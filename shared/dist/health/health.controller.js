"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthController = void 0;
const common_1 = require("@shared/common");
const healthController = (serviceName) => {
    return {
        health: (_req, res) => {
            return res.json((0, common_1.getHealthStatus)(serviceName));
        },
        live: (_req, res) => {
            return res.json((0, common_1.getLivenessStatus)(serviceName));
        },
        ready: (_req, res) => {
            return res.json((0, common_1.getReadinessStatus)(serviceName));
        }
    };
};
exports.healthController = healthController;
