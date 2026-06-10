import {
    Request,
    Response
}
from 'express';

import {
    getNotificationsService,
    markReadService,
    markAllReadService
}
from '@services/notification.service';

export const getNotificationsController =
async (
    req: Request,
    res: Response
) => {

    const userId =
        req.headers[
            'x-user-id'
        ] as string;

    const notifications =
        await getNotificationsService(
            userId
        );

    return res.status(200).json({

        success: true,

        data: notifications
    });
};

export const markReadController =
async (
    req: Request,
    res: Response
) => {

    const notification =
        await markReadService(
            req.params.id as string
        );

    return res.status(200).json({

        success: true,

        data: notification
    });
};

export const markAllReadController =
async (
    req: Request,
    res: Response
) => {

    const userId =
        req.headers[
            'x-user-id'
        ] as string;

    await markAllReadService(
        userId
    );

    return res.status(200).json({

        success: true
    });
};