import { Request, Response } from 'express';

import { getCurrentUser, getAllUsersService } from '@services/user.service';

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

export const getAllUsersController = async (
    req: Request,
    res: Response
) => {
    const users = await getAllUsersService();

    return res.status(200).json({
        success: true,
        data: users
    });
}