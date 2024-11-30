import { injectable } from "tsyringe";
import { AddProductToCartDTO } from "../../dtos/cart/AddProductToCartDTO";

@injectable()
export class AddProductToCartUseCase {
    constructor(
        
    ) {}

    async invoke(addProductDTO: AddProductToCartDTO): Promise<void> {
        // Add product to cart
    }
}