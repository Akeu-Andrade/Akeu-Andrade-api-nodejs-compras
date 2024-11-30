import { Cart } from "../../../domain/entities/Cart";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";

export class CartRepository implements ICartRepository {

    createCart(cart: Cart): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getById(cartId: string): Promise<Cart> {
        throw new Error("Method not implemented.");
    }

    getByUserId(userId: string): Promise<Cart> {
        throw new Error("Method not implemented.");
    }

    clearCart(cartId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    update(cart: Cart): Promise<void> {
        throw new Error("Method not implemented.");
    }

}