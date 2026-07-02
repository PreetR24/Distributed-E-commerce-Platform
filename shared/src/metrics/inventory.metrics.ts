import {
    Counter,
    Histogram
} from "prom-client";

export const inventoryOperationCounter =
    new Counter({

        name:
            "inventory_operations_total",

        help:
            "Total inventory operations",

        labelNames: [
            "operation"
        ]

    });

export const inventoryOperationDuration =
    new Histogram({

        name:
            "inventory_operation_duration_seconds",

        help:
            "Inventory operation duration",

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