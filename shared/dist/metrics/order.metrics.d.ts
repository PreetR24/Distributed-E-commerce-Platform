import { Counter, Histogram } from "prom-client";
export declare const orderStatusCounter: Counter<"status">;
export declare const orderProcessingDuration: Histogram<string>;
