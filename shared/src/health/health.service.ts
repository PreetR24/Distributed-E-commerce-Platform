export interface HealthResponse {

    success: boolean;

    service: string;

    status: string;

    uptime: number;

    timestamp: Date;

}

export interface ReadinessResponse
    extends HealthResponse {

    ready: boolean;

}

export interface LivenessResponse
    extends HealthResponse {

    alive: boolean;

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
): LivenessResponse => {

    return {

        success: true,

        service:
            serviceName,

        status:
            'ALIVE',

        alive:
            true,

        uptime:
            process.uptime(),

        timestamp:
            new Date()

    };

};

export const getReadinessStatus =
(
    serviceName: string
): ReadinessResponse => {

    return {

        success: true,

        service:
            serviceName,

        status:
            'READY',

        ready:
            true,

        uptime:
            process.uptime(),

        timestamp:
            new Date()

    };

};