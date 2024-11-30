import { inject, injectable } from "tsyringe";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";
import { Cart } from "../../../domain/entities/Cart";
import { GetCartDTO } from "../../dtos/cart/GetCartDTO";
import { IGetCartUseCase } from "./interfaces/IGetCartUseCase";
import { CartNotFoundError } from "../../../shared/errors/CartNotFoundError";

@injectable()
export class GetCartUseCase implements IGetCartUseCase {
    constructor(
        @inject("ICartRepository") private cartRepository: ICartRepository
    ) {}

    async invoke(getCartDTO: GetCartDTO): Promise<Cart> {
        try {
            const cart = await this.cartRepository.getById(getCartDTO.cartId);

            if (!cart) {
                throw new CartNotFoundError();
            }

            return cart;
        } catch (error) {
            throw error;
        }
    
    }
}