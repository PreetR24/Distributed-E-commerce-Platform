"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapInfrastructure = void 0;
const retry_1 = require("./retry");
const bootstrapInfrastructure = async (tasks) => {
    for (const task of tasks) {
        await (0, retry_1.retry)({
            name: task.name,
            task: task.task
        });
    }
};
exports.bootstrapInfrastructure = bootstrapInfrastructure;
