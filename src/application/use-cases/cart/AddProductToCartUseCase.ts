import { inject, injectable } from "tsyringe";
import { AddProductToCartDTO } from "../../dtos/cart/AddProductToCartDTO";
import { IGetCartUseCase } from "./interfaces/IGetCartUseCase";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";
import { IProductRepository } from "../../../domain/repositories/IProductRepository";
import { IAddProductToCartUseCase } from "./interfaces/IAddProductToCartUseCase";

@injectable()
export class AddProductToCartUseCase implements IAddProductToCartUseCase {
    constructor(
        @inject('IGetCartUseCase') private getCartUseCase: IGetCartUseCase,
        @inject('ICartRepository') private cartRepository: ICartRepository,
        @inject('IProductRepository') private productRepository: IProductRepository
    ) {}

    async invoke(addProductDTO: AddProductToCartDTO): Promise<void> {
        const cart = await this.getCartUseCase.invoke({ cartId: addProductDTO.cartId });
        const product = await this.productRepository.getById(addProductDTO.productId);

        const existedProduct = cart.products.find(p => p.productId === addProductDTO.productId);

        if (existedProduct) {
            existedProduct.quantity += addProductDTO.quantity? addProductDTO.quantity : 1;
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