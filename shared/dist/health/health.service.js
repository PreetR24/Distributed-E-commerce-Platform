"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadinessStatus = exports.getLivenessStatus = exports.getHealthStatus = void 0;
const getHealthStatus = (serviceName) => {
    return {
        success: true,
        service: serviceName,
        status: 'UP',
        uptime: process.uptime(),
        timestamp: new Date()
    };
};
exports.getHealthStatus = getHealthStatus;
const getLivenessStatus = (serviceName) => {
    return {
        success: true,
        service: serviceName,
        status: 'ALIVE',
        alive: true,
        uptime: process.uptime(),
        timestamp: new Date()
    };
};
exports.getLivenessStatus = getLivenessStatus;
const getReadinessStatus = (serviceName) => {
    return {
        success: true,
        service: serviceName,
        status: 'READY',
        ready: true,
        uptime: process.uptime(),
        timestamp: new Date()
    };
};
exports.getReadinessStatus = getReadinessStatus;
