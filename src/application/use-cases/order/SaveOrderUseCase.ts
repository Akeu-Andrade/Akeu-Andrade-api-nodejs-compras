import { inject, injectable } from "tsyringe";
import { ISaveOrderUseCase } from "../cart/interfaces/ISaveOrderUseCase";
import { Order } from "../../../domain/entities/Order";
import { IOrderRepository } from "../../../domain/repositories/IOrderRepository";
import { SaveOrderDTO } from "../../dtos/order/SaveOrderDTO";

@injectable()
export class SaveOrderUseCase implements ISaveOrderUseCase {
    constructor(
        @inject("IOrderRepository") private orderRepository: IOrderRepository
    ) {}

    async invoke(orderDTO: SaveOrderDTO): Promise<void> {
        try {

            console.log('SaveOrderUseCase: ', orderDTO.products);
            const totalPrice = this.calculateTotalPrice(orderDTO);
            console.log('SaveOrderUseCase: ', totalPrice);

            const order = {
                ...orderDTO,
                totalPrice: totalPrice,
                date: new Date(),
            } as Order;

            console.log('SaveOrderUseCase: ', order);
            await this.orderRepository.createOrder(order);
        } catch (error) {
            throw error;
        }
    }

    private calculateTotalPrice(cart: SaveOrderDTO): number {
        return cart.products.reduce((acc, product) =>
             acc + (product.quantity * product.price), 0);
    }
}