import {
    getCart,
    saveCart,
    clearCart
} from '@repositories/cart.repository';

import { Cart } from '@interfaces/cart.types';

import { logger } from '@shared/common';

export const addToCartService = async (
    userId: string,
    item: {
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }
) => {

    const existingCart =
        await getCart(userId);

    let cart: Cart = existingCart || {
        items: [],
        totalPrice: 0
    };

    const existingItem =
        cart.items.find(
            (cartItem) =>
                cartItem.productId === item.productId
        );

    if (existingItem) {
        existingItem.quantity += item.quantity;
    }
    else {
        cart.items.push(item);
    }

    cart.totalPrice =
        cart.items.reduce(
            (total, cartItem) =>
                total +
                (cartItem.price * cartItem.quantity),
            0
        );

    await saveCart(userId, cart);

    logger.info({
        event: 'Card updated',        
        userId,
        totalAmount: cart.totalPrice
    });

    return cart;
};

export const getCartService = async (
    userId: string
) => {

    return getCart(userId);
};

export const clearCartService = async (
    userId: string
) => {

    await clearCart(userId);

    logger.info({
        event: 'Cart Cleared',
        userId,
    });
};