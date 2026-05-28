import { Request, Response } from 'express';

import { getCurrentUser } from '@services/user.service';

export const currentUserController = async (
    req: Request,
    res: Response
) => {

    const user = await getCurrentUser(
        req.user!.userId
    );

    return res.status(200).json({
        success: true,
        data: user
    });
};