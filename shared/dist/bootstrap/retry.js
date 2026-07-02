"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retry = void 0;
const logger_1 = require("../utils/logger");
const sleep_1 = require("./sleep");
const retry = async ({ name, task, maxAttempts = 10, delay = 2000, backoffMultiplier = 1.5 }) => {
    let currentDelay = delay;
    let attempt = 1;
    while (attempt <= maxAttempts) {
        try {
            await task();
            logger_1.logger.info(`${name} Connected`);
            return;
        }
        catch (error) {
            logger_1.logger.warn(`${name} Connection Failed (Attempt ${attempt}/${maxAttempts})`);
            if (attempt === maxAttempts) {
                logger_1.logger.error(`${name} Connection Failed Permanently`, error);
                throw error;
            }
            logger_1.logger.info(`Retrying ${name} in ${currentDelay} ms...`);
            await (0, sleep_1.sleep)(currentDelay);
            currentDelay =
                Math.floor(currentDelay *
                    backoffMultiplier);
            attempt++;
        }
    }
};
exports.retry = retry;
