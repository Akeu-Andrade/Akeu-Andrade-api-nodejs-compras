import { inject, injectable } from "tsyringe";
import { IGetCartUseCase } from "./IGetCartUseCase";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";
import { Cart } from "../../../domain/entities/Cart";
import { GetCartDTO } from "../../dtos/cart/GetCartDTO";

@injectable()
export class GetCartUseCase implements IGetCartUseCase {
    constructor(
        @inject("ICartRepository") private cartRepository: ICartRepository
    ) {}

    async invoke(getCartDTO: GetCartDTO): Promise<Cart> {
        const cart = await this.cartRepository.getByUserId(getCartDTO);

        if (!cart) {
            throw new Error("Carrinho não encontrado");
        }

        return cart;
    }
}