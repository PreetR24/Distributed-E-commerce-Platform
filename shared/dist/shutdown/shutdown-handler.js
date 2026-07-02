"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerShutdownSignals = void 0;
const graceful_shutdown_1 = require("./graceful-shutdown");
const registerShutdownSignals = () => {
    process.once("SIGTERM", graceful_shutdown_1.gracefulShutdown);
    process.once("SIGINT", graceful_shutdown_1.gracefulShutdown);
};
exports.registerShutdownSignals = registerShutdownSignals;
