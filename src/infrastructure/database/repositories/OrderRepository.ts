import { Order } from "../../../domain/entities/Order";
import { IOrderRepository } from "../../../domain/repositories/IOrderRepository";
import { OrderModel } from "../models/OrderModel";

export class OrderRepository implements IOrderRepository {
    async createOrder(order: Order): Promise<string> {
        return (await OrderModel.create(order)).id;
    }
}