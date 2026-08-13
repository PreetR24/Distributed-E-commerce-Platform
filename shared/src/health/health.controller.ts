import {
    Request,
    Response
} from 'express';

import {
    getHealthStatus,
    getLivenessStatus,
    getReadinessStatus
} from '@shared/common';

export const healthController =
(
    serviceName: string
) => {

    return {

        health:
        (
            _req: Request,
            res: Response
        ) => {

            return res.json(
                getHealthStatus(
                    serviceName
                )
            );

        },

        live:
        (
            _req: Request,
            res: Response
        ) => {

            return res.json(
                getLivenessStatus(
                    serviceName
                )
            );

        },

        ready:
        (
            _req: Request,
            res: Response
        ) => {

            return res.json(
                getReadinessStatus(
                    serviceName
                )
            );

        }

    };

};