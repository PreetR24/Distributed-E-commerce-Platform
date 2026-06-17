"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsController = void 0;
const prometheus_1 = require("../metrics/prometheus");
const metricsController = async (_req, res) => {
    res.set('Content-Type', prometheus_1.register.contentType);
    res.end(await prometheus_1.register.metrics());
};
exports.metricsController = metricsController;
