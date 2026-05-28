import jwt from 'jsonwebtoken';
import ms from 'ms';

export const generateAccessToken = (
    payload: object
) => {
    return jwt.sign(
        payload,
        process.env.JWT_ACCESS_SECRET!,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as ms.StringValue
        }
    );
};

export const generateRefreshToken = (
    payload: object
) => {
    return jwt.sign(
        payload,
        process.env.JWT_REFRESH_SECRET!,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as ms.StringValue
        }
    );
};