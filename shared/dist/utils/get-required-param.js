"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeaderValue = exports.getRequiredParam = void 0;
const app_error_1 = require("../errors/app-error");
const getRequiredParam = (value, paramName) => {
    if (!value) {
        throw new app_error_1.AppError('MISSING_ROUTE_PARAM', 400, `${paramName} route param is required`);
    }
    if (Array.isArray(value)) {
        return value[0];
    }
    return value;
};
exports.getRequiredParam = getRequiredParam;
const getHeaderValue = (value) => {
    if (!value) {
        return '';
    }
    if (Array.isArray(value)) {
        return value[0];
    }
    return value;
};
exports.getHeaderValue = getHeaderValue;
