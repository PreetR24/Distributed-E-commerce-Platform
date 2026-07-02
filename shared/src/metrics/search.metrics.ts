import {
    Counter,
    Histogram
} from "prom-client";

export const searchOperationCounter =
    new Counter({

        name:
            "search_operations_total",

        help:
            "Total search operations",

        labelNames: [
            "operation"
        ]

    });

export const searchOperationDuration =
    new Histogram({

        name:
            "search_operation_duration_seconds",

        help:
            "Search operation duration",

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