import {
    Request,
    Response,
    NextFunction
}
from 'express';

import {
    logger
}
from '../utils/logger';

export const requestLogger =
(
    req: Request,
    _res: Response,
    next: NextFunction
) => {

    logger.info({

        message:
            'Incoming Request',

        requestId:
            req.headers[
                'x-request-id'
            ],

        method:
            req.method,

        url:
            req.originalUrl
    });

    next();
};