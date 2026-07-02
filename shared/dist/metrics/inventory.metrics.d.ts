import { Counter, Histogram } from "prom-client";
export declare const inventoryOperationCounter: Counter<"operation">;
export declare const inventoryOperationDuration: Histogram<string>;
