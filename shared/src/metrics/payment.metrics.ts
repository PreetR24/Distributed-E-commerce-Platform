import {
    Counter,
    Histogram
} from "prom-client";

export const paymentStatusCounter =
    new Counter({

        name:
            "payments_total",

        help:
            "Total payments by status",

        labelNames: [
            "status"
        ]

    });

export const paymentProcessingDuration =
    new Histogram({

        name:
            "payment_processing_duration_seconds",

        help:
            "Time taken to process payments",

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