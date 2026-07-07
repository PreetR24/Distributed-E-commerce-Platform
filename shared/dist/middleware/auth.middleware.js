"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRequest = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logger_1 = require("../utils/logger");
const authenticateRequest = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }
    const token = authorizationHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access token missing'
        });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_ACCESS_SECRET);
        req.headers['x-user-id'] =
            decoded.userId;
        req.headers['x-user-role'] =
            decoded.role;
        next();
    }
    catch (error) {
        logger_1.logger.error('Authentication Error:', {
            error
        });
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
};
exports.authenticateRequest = authenticateRequest;
