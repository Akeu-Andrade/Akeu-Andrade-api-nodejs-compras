import { AddProductToCartDTO } from "../../dtos/cart/AddProductToCartDTO";

export interface IAddProductUseCase {
    invoke(addProductDTO: AddProductToCartDTO): Promise<void>;
}