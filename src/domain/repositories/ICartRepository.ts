import { AddProductToCartDTO } from "../../application/dtos/cart/AddProductToCartDTO";
import { SaveCartDTO } from "../../application/dtos/cart/SaveCartDTO";
import { GetCartDTO } from "../../application/dtos/GetCartDTO";
import { Cart } from "../entities/Cart";

export interface ICartRepository {
    createCart(cart: SaveCartDTO): Promise<void>;
    getById(cartId: string): Promise<Cart>;
    getByUserId(cart: GetCartDTO): Promise<Cart>;
    addProductToCart(product: AddProductToCartDTO): Promise<void>;
    clearCart(cartId: string): Promise<void>;
}