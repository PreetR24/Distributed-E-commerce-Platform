export interface HealthResponse {
    success: boolean;
    service: string;
    status: string;
    uptime: number;
    timestamp: Date;
}
export interface ReadinessResponse extends HealthResponse {
    ready: boolean;
}
export interface LivenessResponse extends HealthResponse {
    alive: boolean;
}
export declare const getHealthStatus: (serviceName: string) => HealthResponse;
export declare const getLivenessStatus: (serviceName: string) => LivenessResponse;
export declare const getReadinessStatus: (serviceName: string) => ReadinessResponse;
