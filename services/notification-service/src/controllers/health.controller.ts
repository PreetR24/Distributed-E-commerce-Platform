import {
    Request,
    Response
}
from 'express';

import {
    getHealthStatus
}
from '@shared/common';

export const healthController =
(
    _req: Request,
    res: Response
) => {

    return res.status(200).json(

        getHealthStatus(
            'notification-service'
        )
    );
};