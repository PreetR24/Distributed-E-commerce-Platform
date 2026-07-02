import { Counter, Histogram } from "prom-client";
export declare const searchOperationCounter: Counter<"operation">;
export declare const searchOperationDuration: Histogram<string>;
