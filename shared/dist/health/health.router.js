"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHealthRouter = void 0;
const express_1 = require("express");
const health_controller_1 = require("./health.controller");
const createHealthRouter = (serviceName) => {
    const router = (0, express_1.Router)();
    const controller = (0, health_controller_1.createHealthController)(serviceName);
    router.get('/', controller.health);
    router.get('/live', controller.live);
    router.get('/ready', controller.ready);
    return router;
};
exports.createHealthRouter = createHealthRouter;
