import { AddProductToCartDTO } from "../../application/dtos/cart/AddProductToCartDTO";
import { GetCartDTO } from "../../application/dtos/cart/GetCartDTO";
import { SaveCartDTO } from "../../application/dtos/cart/SaveCartDTO";
import { Cart } from "../entities/Cart";

export interface ICartRepository {
    createCart(cart: SaveCartDTO): Promise<void>;
    getByUserId(cart: GetCartDTO): Promise<Cart>;
    addProductToCart(product: AddProductToCartDTO): Promise<void>;
}