"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryOperationDuration = exports.inventoryOperationCounter = void 0;
const prom_client_1 = require("prom-client");
exports.inventoryOperationCounter = new prom_client_1.Counter({
    name: "inventory_operations_total",
    help: "Total inventory operations",
    labelNames: [
        "operation"
    ]
});
exports.inventoryOperationDuration = new prom_client_1.Histogram({
    name: "inventory_operation_duration_seconds",
    help: "Inventory operation duration",
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
