"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthController = void 0;
const healthController = (_req, res) => {
    return res.status(200).json({
        success: true,
        status: 'UP',
        timestamp: new Date()
    });
};
exports.healthController = healthController;
