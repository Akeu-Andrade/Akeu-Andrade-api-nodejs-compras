import { inject, injectable } from "tsyringe";
import { ISaveOrderUseCase } from "../cart/interfaces/ISaveOrderUseCase";
import { Order } from "../../../domain/entities/Order";
import { IOrderRepository } from "../../../domain/repositories/IOrderRepository";
import { SaveOrderDTO } from "../../dtos/order/SaveOrderDTO";
import { Cart } from "../../../domain/entities/Cart";

@injectable()
export class SaveOrderUseCase implements ISaveOrderUseCase {
    constructor(
        @inject("IOrderRepository") private orderRepository: IOrderRepository
    ) {}

    async invoke(orderDTO: SaveOrderDTO): Promise<void> {
        try {

            const totalPrice = this.calculateTotalPrice(orderDTO);

            const order = {
                ...orderDTO,
                totalPrice: totalPrice,
                date: new Date(),
            } as Order;

            await this.orderRepository.saveOrder(order);
        } catch (error) {
            throw error;
        }
    }

    private calculateTotalPrice(cart: SaveOrderDTO): number {
        return cart.products.reduce((acc, product) =>
             acc + (product.quantity * product.price), 0);
    }
}