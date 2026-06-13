"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealthStatus = void 0;
const getHealthStatus = (serviceName) => {
    return {
        success: true,
        service: serviceName,
        status: 'UP',
        timestamp: new Date()
    };
};
exports.getHealthStatus = getHealthStatus;
