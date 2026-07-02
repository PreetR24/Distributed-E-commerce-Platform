import {
    Counter,
    Histogram
} from "prom-client";

export const grpcRequestCounter =
    new Counter({

        name:
            "grpc_requests_total",

        help:
            "Total gRPC requests",

        labelNames: [
            "caller",

            "service",

            "method",

            "status"

        ]

    });

export const grpcRequestDuration =
    new Histogram({

        name:
            "grpc_request_duration_seconds",

        help:
            "gRPC request duration",

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