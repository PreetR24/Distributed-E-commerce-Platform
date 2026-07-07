import { Request, Response, NextFunction }
from 'express';

import { v4 as uuid } from "uuid";

export const requestIdMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const requestId =

        req.headers[
            'x-request-id'
        ] as string

        ||

        uuid();

    req.headers[
        'x-request-id'
    ] = requestId;

    res.setHeader(
        'x-request-id',
        requestId
    );

    next();
};