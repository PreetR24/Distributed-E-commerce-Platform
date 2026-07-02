"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitFor = void 0;
const retry_1 = require("./retry");
const waitFor = async (options) => {
    await (0, retry_1.retry)({
        name: options.name,
        task: options.task
    });
};
exports.waitFor = waitFor;
