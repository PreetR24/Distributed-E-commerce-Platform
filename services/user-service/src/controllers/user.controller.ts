import { Request, Response } from 'express';

import { getCurrentUser, getAllUsersService, updateUser, deleteUser } from '@services/user.service';

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

export const updateUserController = async (
    req: Request,
    res: Response
) => {
    const userId = req.params.id as string;

    const user = await updateUser(
        userId,
        req.body
    );

    return res.status(200).json({
        success: true,
        data: user
    });
};

export const deleteUserController = async (
    req: Request,
    res: Response
) => {
    const userId = req.params.id as string;
    await deleteUser(
        userId
    );

    return res.status(200).json({
        success: true,
        message: 'User deleted successfully'
    });
};