import {
    Request,
    Response
}
from 'express';

import {
    register
}
from '../metrics/prometheus';

export const metricsController =
async (
    _req: Request,
    res: Response
) => {

    res.set(
        'Content-Type',
        register.contentType
    );

    res.end(
        await register.metrics()
    );
};