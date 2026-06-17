import {
    httpRequestCounter,
    requestDuration
}
from '../metrics/prometheus';

export const metricsMiddleware =
(
    req: any,
    res: any,
    next: any
) => {

    const end =
        requestDuration.startTimer();

    res.on(
        'finish',
        () => {

            httpRequestCounter.inc({
                method:
                    req.method,

                route:
                    req.path,

                status:
                    res.statusCode
            });

            end({
                method:
                    req.method,

                route:
                    req.path
            });
        }
    );

    next();
};