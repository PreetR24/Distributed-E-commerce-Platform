"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsMiddleware = void 0;
const prometheus_1 = require("../metrics/prometheus");
const metricsMiddleware = (req, res, next) => {
    const end = prometheus_1.requestDuration.startTimer();
    res.on('finish', () => {
        prometheus_1.httpRequestCounter.inc({
            method: req.method,
            route: req.path,
            status: res.statusCode
        });
        end({
            method: req.method,
            route: req.path
        });
    });
    next();
};
exports.metricsMiddleware = metricsMiddleware;
