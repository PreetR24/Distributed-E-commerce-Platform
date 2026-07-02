import {

    Request,
    Response

}
from 'express';

import {

    getHealthStatus,
    getLivenessStatus,
    getReadinessStatus

}
from '@shared/common';

const SERVICE_NAME =
    'inventory-service';

export const healthController =
(
    _req: Request,
    res: Response
) => {

    return res.json(
        getHealthStatus(
            SERVICE_NAME
        )
    );

};

export const livenessController =
(
    _req: Request,
    res: Response
) => {

    return res.json(
        getLivenessStatus(
            SERVICE_NAME
        )
    );

};

export const readinessController =
(
    _req: Request,
    res: Response
) => {

    return res.json(
        getReadinessStatus(
            SERVICE_NAME
        )
    );

};