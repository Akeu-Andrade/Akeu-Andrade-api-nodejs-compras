import { Cart } from "../../../domain/entities/Cart";
import { GetCartDTO } from "../../dtos/GetCartDTO";

export interface IGetCartUseCase {
    invoke(getCartDTO: GetCartDTO): Promise<Cart>;
}