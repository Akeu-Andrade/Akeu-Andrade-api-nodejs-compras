import { Cart } from "../entities/Cart";

export interface ICartRepository {
    createCart(cart: Cart): Promise<void>;
    getById(cartId: string): Promise<Cart>;
    getByUserId(userId: string): Promise<Cart>;
    clearCart(cartId: string): Promise<void>;
    update(cart: Cart): Promise<void>;
}