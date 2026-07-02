"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryGrpc = void 0;
const retry_1 = require("../bootstrap/retry");
const retryGrpc = async (name, task) => {
    await (0, retry_1.retry)({
        name,
        task,
        delay: 2000,
        maxAttempts: 20
    });
};
exports.retryGrpc = retryGrpc;
