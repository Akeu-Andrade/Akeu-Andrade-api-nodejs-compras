import { inject, injectable } from "tsyringe";
import { IFinishCartUseCase } from "./interfaces/IFinishCartUseCase";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";
import { FinishCartDTO } from "../../dtos/cart/FinishCartDTO";
import { Cart } from "../../../domain/entities/Cart";
import { EmptyCartError } from "../../../shared/errors/EmptyCartError";
import { Order } from "../../../domain/entities/Order";
import { IGetCartUseCase } from "./interfaces/IGetCartUseCase";

@injectable()
export class FinishCartUseCase implements IFinishCartUseCase {
    constructor(
        @inject('ICartRepository') private cartRepository: ICartRepository,
        @inject('IGetCartUseCase') private getCartUseCase: IGetCartUseCase
    ) {}

    async invoke(cartDTO: FinishCartDTO): Promise<void> {
        try {
            const cart = await this.getCartUseCase.invoke({ cartId: cartDTO.cartId });

            if (!cart.products.length) {
                throw new EmptyCartError();
            }

            const totalPrice = this.calculateTotalPriceCart(cart);

            const order: Order = {
                ...cart,
                date: new Date(),
                totalPrice: totalPrice,
            }

            await this.cartRepository.clearCart(cart.id);
        } catch (error) {
            throw error;
        }
    }

    private calculateTotalPriceCart(cart: Cart): number {
        return cart.products.reduce((acc, product) =>
             acc + (product.quantity * product.price), 0);
    }
}