"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentProcessingDuration = exports.paymentStatusCounter = void 0;
const prom_client_1 = require("prom-client");
exports.paymentStatusCounter = new prom_client_1.Counter({
    name: "payments_total",
    help: "Total payments by status",
    labelNames: [
        "status"
    ]
});
exports.paymentProcessingDuration = new prom_client_1.Histogram({
    name: "payment_processing_duration_seconds",
    help: "Time taken to process payments",
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
