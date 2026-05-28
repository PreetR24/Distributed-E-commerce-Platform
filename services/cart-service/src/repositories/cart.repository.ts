import { redisClient } from '@config/redis';

import { Cart } from '@interfaces/cart.types';

import { CART_TTL_IN_SECONDS }
from '@constants/cart.constants';

const getCartKey = (
    userId: string
) => {
    return `cart:user:${userId}`;
};

export const getCart = async (
    userId: string
): Promise<Cart | null> => {

    const cart =
        await redisClient.get(
            getCartKey(userId)
        );

    if (!cart) {
        return null;
    }

    return JSON.parse(cart);
};

export const saveCart = async (
    userId: string,
    cart: Cart
) => {

    await redisClient.set(
        getCartKey(userId),
        JSON.stringify(cart),
        {
            EX: CART_TTL_IN_SECONDS
        }
    );
};

export const clearCart = async (
    userId: string
) => {

    await redisClient.del(
        getCartKey(userId)
    );
};