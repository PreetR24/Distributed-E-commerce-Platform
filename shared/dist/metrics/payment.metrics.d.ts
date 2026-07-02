import { Counter, Histogram } from "prom-client";
export declare const paymentStatusCounter: Counter<"status">;
export declare const paymentProcessingDuration: Histogram<string>;
