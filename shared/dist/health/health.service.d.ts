export interface HealthResponse {
    success: boolean;
    service: string;
    status: string;
    uptime: number;
    timestamp: Date;
}
export declare const getHealthStatus: (serviceName: string) => HealthResponse;
export declare const getLivenessStatus: (serviceName: string) => HealthResponse;
export declare const getReadinessStatus: (serviceName: string) => HealthResponse;
