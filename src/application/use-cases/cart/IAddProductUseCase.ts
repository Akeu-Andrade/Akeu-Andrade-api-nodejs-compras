import { AddProductToCartDTO } from "../../dtos/AddProductToCartDTO";

export interface IAddProductUseCase {
    invoke(addProductDTO: AddProductToCartDTO): Promise<void>;
}