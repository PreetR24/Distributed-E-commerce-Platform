import { Counter, Histogram } from "prom-client";

export const ordersCreatedTotal =
    new Counter({

        name: "orders_created_total",

        help: "Total orders created"

    });

export const ordersCancelledTotal =
    new Counter({

        name: "orders_cancelled_total",

        help: "Total orders cancelled"

    });

export const ordersFailedTotal =
    new Counter({

        name: "orders_failed_total",

        help: "Total failed orders"

    });

export const orderProcessingDuration =
    new Histogram({

        name: "order_processing_duration_seconds",

        help: "Order processing duration",

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