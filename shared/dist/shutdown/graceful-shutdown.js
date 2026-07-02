"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gracefulShutdown = exports.registerShutdownTask = void 0;
const logger_1 = require("../utils/logger");
const cleanupTasks = [];
let shuttingDown = false;
const registerShutdownTask = (name, task) => {
    cleanupTasks.push({
        name,
        task
    });
};
exports.registerShutdownTask = registerShutdownTask;
const gracefulShutdown = async () => {
    if (shuttingDown) {
        return;
    }
    shuttingDown = true;
    logger_1.logger.info('Graceful shutdown started.');
    const tasks = [...cleanupTasks].reverse();
    for (const [index, cleanupTask] of tasks.entries()) {
        try {
            logger_1.logger.info(`Running shutdown task ${index + 1}/${tasks.length}: ${cleanupTask.name}`);
            await cleanupTask.task();
            logger_1.logger.info(`Completed shutdown task ${index + 1}/${tasks.length}: ${cleanupTask.name}`);
        }
        catch (error) {
            logger_1.logger.error(`Shutdown task failed: ${cleanupTask.name}`, error);
        }
    }
    logger_1.logger.info('Graceful shutdown completed.');
    process.exit(0);
};
exports.gracefulShutdown = gracefulShutdown;
