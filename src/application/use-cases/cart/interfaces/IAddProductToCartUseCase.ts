import { AddProductToCartDTO } from "../../../dtos/cart/AddProductToCartDTO";

export interface IAddProductToCartUseCase {
    invoke(addProductDTO: AddProductToCartDTO): Promise<void>;
}