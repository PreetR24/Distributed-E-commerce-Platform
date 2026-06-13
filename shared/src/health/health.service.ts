export const getHealthStatus =
(
    serviceName: string
) => {

    return {

        success: true,

        service:
            serviceName,

        status:
            'UP',

        timestamp:
            new Date()
    };
};