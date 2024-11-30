import { SaveCartDTO } from "../../application/dtos/SaveCartDTO";

export interface ICartRepository {
    createCart(cart: SaveCartDTO): Promise<void>;
    getCartByUserId(userId: string): Promise<SaveCartDTO | null>;
    addProductToCart(cart: SaveCartDTO, productId: string): Promise<void>;
}