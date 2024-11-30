import { FinishCartDTO } from "../../../dtos/cart/FinishCartDTO";

export interface IFinishCartUseCase {
    invoke(cart: FinishCartDTO): Promise<void>;
}