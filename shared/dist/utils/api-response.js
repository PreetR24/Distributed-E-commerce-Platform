"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (message, data = null) => {
    return {
        success: true,
        message,
        data
    };
};
exports.successResponse = successResponse;
const errorResponse = (message) => {
    return {
        success: false,
        message
    };
};
exports.errorResponse = errorResponse;
