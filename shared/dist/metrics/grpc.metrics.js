"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcRequestDuration = exports.grpcRequestCounter = void 0;
const prom_client_1 = require("prom-client");
exports.grpcRequestCounter = new prom_client_1.Counter({
    name: "grpc_requests_total",
    help: "Total gRPC requests",
    labelNames: [
        "caller",
        "service",
        "method",
        "status"
    ]
});
exports.grpcRequestDuration = new prom_client_1.Histogram({
    name: "grpc_request_duration_seconds",
    help: "gRPC request duration",
    labelNames: [
        "service",
        "method"
    ],
    buckets: [
        0.01,
        0.05,
        0.1,
        0.25,
        0.5,
        1,
        2
    ]
});
