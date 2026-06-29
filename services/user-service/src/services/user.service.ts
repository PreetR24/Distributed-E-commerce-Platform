import { UserRole } from '@shared/common';

import {
    findUserById,
    findUserByEmail,
    getAllUsers,
    updateUserById,
    deleteUserById
} from '@repositories/user.repository';

import { AppError } from '@shared/common';

export const getCurrentUser = async (
    userId: string
) => {

    const user = await findUserById(userId);

    if (!user) {
        throw new AppError(
            'User not found',
            404,
            'No user found with the provided id.'
        );
    }

    return user;
};

export const getAllUsersService = async () => {
    return getAllUsers();
};

export const updateUser = async (
    userId: string,
    data: {
        name?: string;
        email?: string;
        role?: UserRole;
    }
) => {

    const user = await findUserById(userId);

    if (!user) {
        throw new AppError(
            'User not found',
            404,
            'No user found with the provided id.'
        );
    }

    if (
        data.email &&
        data.email !== user.email
    ) {

        const existingUser =
            await findUserByEmail(data.email);

        if (existingUser) {
            throw new AppError(
                'Email already exists',
                409,
                'A user with this email already exists.'
            );
        }
    }

    return updateUserById(
        userId,
        data
    );
};

export const deleteUser = async (
    userId: string
) => {

    const user = await findUserById(userId);

    if (!user) {
        throw new AppError(
            'User not found',
            404,
            'No user found with the provided id.'
        );
    }

    await deleteUserById(userId);

    return {
        message: 'User deleted successfully'
    };
};