import { Counter, Histogram } from "prom-client";

export const orderStatusCounter =
    new Counter({

        name: "orders_total",

        help: "Total orders by status",

        labelNames: ["status"]

    });

export const orderProcessingDuration =
    new Histogram({

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