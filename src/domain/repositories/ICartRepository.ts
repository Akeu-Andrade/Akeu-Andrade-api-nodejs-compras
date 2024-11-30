import { AddProductToCartDTO } from "../../application/dtos/AddProductToCartDTO";
import { GetCartDTO } from "../../application/dtos/GetCartDTO";
import { SaveCartDTO } from "../../application/dtos/SaveCartDTO";
import { Cart } from "../entities/Cart";

export interface ICartRepository {
    createCart(cart: SaveCartDTO): Promise<void>;
    getByUserId(cart: GetCartDTO): Promise<Cart>;
    addProductToCart(product: AddProductToCartDTO): Promise<void>;
}