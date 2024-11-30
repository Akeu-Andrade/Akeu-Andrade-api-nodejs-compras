import { inject, injectable } from "tsyringe";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";
import { Cart } from "../../../domain/entities/Cart";
import { GetCartDTO } from "../../dtos/GetCartDTO";
import { IGetCartUseCase } from "./interfaces/IGetCartUseCase";

@injectable()
export class GetCartUseCase implements IGetCartUseCase {
    constructor(
        @inject("ICartRepository") private cartRepository: ICartRepository
    ) {}

    async invoke(getCartDTO: GetCartDTO): Promise<Cart> {
        const cart = await this.cartRepository.getById(getCartDTO.cartId);

        if (!cart) {
            throw new Error("Carrinho não encontrado");
        }

        return cart;
    }
}