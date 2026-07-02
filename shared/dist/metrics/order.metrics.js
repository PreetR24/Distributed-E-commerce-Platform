"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProcessingDuration = exports.orderStatusCounter = void 0;
const prom_client_1 = require("prom-client");
exports.orderStatusCounter = new prom_client_1.Counter({
    name: "orders_total",
    help: "Total orders by status",
    labelNames: ["status"]
});
exports.orderProcessingDuration = new prom_client_1.Histogram({
    name: "order_processing_duration_seconds",
    help: "Time taken to process an order",
    buckets: [
        0.05,
        0.1,
        0.25,
        0.5,
        1,
        2,
        5
    ]
});
