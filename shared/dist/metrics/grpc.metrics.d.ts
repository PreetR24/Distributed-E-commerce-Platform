import { Counter, Histogram } from "prom-client";
export declare const grpcRequestCounter: Counter<"method" | "status" | "caller" | "service">;
export declare const grpcRequestDuration: Histogram<"method" | "service">;
