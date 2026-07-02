"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapError = exports.bootstrapWarning = exports.bootstrapSuccess = exports.bootstrapLog = void 0;
const bootstrapLog = (message) => {
    console.log(`[Bootstrap] ${message}`);
};
exports.bootstrapLog = bootstrapLog;
const bootstrapSuccess = (message) => {
    console.log(`✅ [Bootstrap] ${message}`);
};
exports.bootstrapSuccess = bootstrapSuccess;
const bootstrapWarning = (message) => {
    console.log(`⚠️ [Bootstrap] ${message}`);
};
exports.bootstrapWarning = bootstrapWarning;
const bootstrapError = (message) => {
    console.log(`❌ [Bootstrap] ${message}`);
};
exports.bootstrapError = bootstrapError;
