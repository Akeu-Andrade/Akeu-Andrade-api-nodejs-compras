import { inject, injectable } from "tsyringe";
import { AddProductToCartDTO } from "../../dtos/cart/AddProductToCartDTO";
import { IGetCartUseCase } from "./interfaces/IGetCartUseCase";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";
import { IProductRepository } from "../../../domain/repositories/IProductRepository";

@injectable()
export class AddProductToCartUseCase {
    constructor(
        @inject('IGetCartUseCase') private getCartUseCase: IGetCartUseCase,
        @inject('ICartRepository') private cartRepository: ICartRepository,
        @inject('IProductRepository') private productRepository: IProductRepository
    ) {}

    async invoke(addProductDTO: AddProductToCartDTO): Promise<void> {
        const cart = await this.getCartUseCase.invoke({ cartId: addProductDTO.cartId });
        const product = await this.productRepository.getById(addProductDTO.productId);

        const existedProduct = cart.products.find(product => product.productId === addProductDTO.productId);

        if (existedProduct) {
            existedProduct.quantity += addProductDTO.quantity;
        } else {
            cart.products.push({
                productId: addProductDTO.productId,
                quantity: 1,
                price: product!.price
            });
        }

        await this.cartRepository.update(cart);
    }
}