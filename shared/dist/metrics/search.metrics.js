"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOperationDuration = exports.searchOperationCounter = void 0;
const prom_client_1 = require("prom-client");
exports.searchOperationCounter = new prom_client_1.Counter({
    name: "search_operations_total",
    help: "Total search operations",
    labelNames: [
        "operation"
    ]
});
exports.searchOperationDuration = new prom_client_1.Histogram({
    name: "search_operation_duration_seconds",
    help: "Search operation duration",
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
