"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
const logger_1 = require("../utils/logger");
const requestLogger = (req, res, next) => {
    logger_1.logger.info('Incoming Request', {
        method: req.method,
        url: req.originalUrl,
        requestId: req.headers['x-request-id']
    });
    logger_1.logger.info('Incoming Request', {
        requestId: req.headers['x-request-id']
    });
    next();
};
exports.requestLogger = requestLogger;
