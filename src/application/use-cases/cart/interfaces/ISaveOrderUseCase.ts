import { SaveOrderDTO } from "../../../dtos/order/SaveOrderDTO";

export interface ISaveOrderUseCase {
    invoke(orderDTO: SaveOrderDTO): Promise<void>;
}