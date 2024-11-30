import { Cart } from "../entities/Cart";

export interface ICartRepository {
    createCart(userId: string): Promise<void>;
    getById(cartId: string): Promise<Cart | null>;
    getByUserId(userId: string): Promise<Cart | null>;
    clearCart(cartId: string): Promise<void>;
    update(cart: Cart): Promise<void>;
}