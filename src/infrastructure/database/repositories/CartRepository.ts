import { Cart } from "../../../domain/entities/Cart";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";
import { CartModel } from "../models/CartModel";

export class CartRepository implements ICartRepository {

    async createCart(userId: string): Promise<void> {
        const newCart = {
            userId: userId,
            products: [],
            createdAt: new Date(),
            updatedAt: new Date()
        };

        await CartModel.create({...newCart});
    }

    async getById(cartId: string): Promise<Cart | null> {
        return await CartModel.findById(cartId);
    }

    async getByUserId(userId: string): Promise<Cart | null> {
        return await CartModel.findOne({ userId });
    }

    async clearCart(cartId: string): Promise<void> {
        await CartModel.updateOne({ _id: cartId }, { products: [] });
    }
    
    async update(cart: Cart): Promise<void> {
        cart.updatedAt = new Date();
        await CartModel.updateOne({ _id: cart.id }, cart);
    }

}