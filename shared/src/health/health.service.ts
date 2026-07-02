export interface HealthResponse {

    success: boolean;

    service: string;

    status: string;

    uptime: number;

    timestamp: Date;

}

export const getHealthStatus =
(
    serviceName: string
): HealthResponse => {

    return {

        success: true,

        service:
            serviceName,

        status:
            'UP',

        uptime:
            process.uptime(),

        timestamp:
            new Date()

    };

};

export const getLivenessStatus =
(
    serviceName: string
): HealthResponse => {

    return getHealthStatus(
        serviceName
    );

};

export const getReadinessStatus =
(
    serviceName: string
): HealthResponse => {

    return getHealthStatus(
        serviceName
    );

};