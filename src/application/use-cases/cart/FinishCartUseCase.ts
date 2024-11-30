import { inject, injectable } from "tsyringe";
import { IFinishCartUseCase } from "./interfaces/IFinishCartUseCase";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";
import { FinishCartDTO } from "../../dtos/cart/FinishCartDTO";
import { EmptyCartError } from "../../../shared/errors/EmptyCartError";
import { IGetCartUseCase } from "./interfaces/IGetCartUseCase";
import { ISaveOrderUseCase } from "./interfaces/ISaveOrderUseCase";
import { SaveOrderDTO } from "../../dtos/order/SaveOrderDTO";

@injectable()
export class FinishCartUseCase implements IFinishCartUseCase {
    constructor(
        @inject('ICartRepository') private cartRepository: ICartRepository,
        @inject('IGetCartUseCase') private getCartUseCase: IGetCartUseCase,
        @inject('ISaveOrderUseCase') private saveOrderUseCase: ISaveOrderUseCase
    ) {}

    async invoke(cartDTO: FinishCartDTO): Promise<void> {
        try {
            const cart = await this.getCartUseCase.invoke({ cartId: cartDTO.cartId });

            if (!cart.products.length) {
                throw new EmptyCartError();
            }

            const order: SaveOrderDTO = {
                userId: cart.userId,
                products: cart.products.map(product => ({
                    productId: product.productId,
                    price: product.price,
                    quantity: product.quantity
                }))
            };

            console.log('FinishCartUseCase: ', order);

            await this.saveOrderUseCase.invoke(order);

            await this.cartRepository.clearCart(cart.id);
        } catch (error) {
            throw error;
        }
    }


}