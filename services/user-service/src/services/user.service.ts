import { findUserById } from '@repositories/user.repository';

export const getCurrentUser = async (
    userId: string
) => {

    return findUserById(userId);
};