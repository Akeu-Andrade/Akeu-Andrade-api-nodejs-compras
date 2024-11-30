import { inject, injectable } from "tsyringe";
import { AddProductToCartDTO } from "../../dtos/cart/AddProductToCartDTO";
import { IGetCartUseCase } from "./interfaces/IGetCartUseCase";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";
import { IProductRepository } from "../../../domain/repositories/IProductRepository";
import { IAddProductToCartUseCase } from "./interfaces/IAddProductToCartUseCase";
import { Cart } from "../../../domain/entities/Cart";
import { Product } from "../../../domain/entities/Product";
import { CartNotFoundError } from "../../../shared/errors/CartNotFoundError";
import { ProductNotFoundError } from "../../../shared/errors/ProductNotFoundError";

@injectable()
export class AddProductToCartUseCase implements IAddProductToCartUseCase {
    constructor(
        @inject('IGetCartUseCase') private getCartUseCase: IGetCartUseCase,
        @inject('ICartRepository') private cartRepository: ICartRepository,
        @inject('IProductRepository') private productRepository: IProductRepository
    ) {}

    async invoke(addProductDTO: AddProductToCartDTO): Promise<void> {
        try {
            const cart = await this.getCartUseCase.invoke({ cartId: addProductDTO.cartId });
            
            const product = await this.productRepository.getById(addProductDTO.productId);
            if (!product) {
                throw new ProductNotFoundError();
            }

            this.addOrUpdateProduct(cart, product, addProductDTO.quantity);

            await this.cartRepository.update(cart);
        } catch (error) {
            throw error;
        }
    }

    private addOrUpdateProduct(cart: Cart, product: Product, quantity: number): void {
        const existedProduct = cart.products.find(p => p.productId === product.id);

        if (existedProduct) {
            existedProduct.quantity += quantity;
        } else {
            cart.products.push({
                productId: product.id,
                quantity: quantity,
                price: product.price
            });
        }
    }
}