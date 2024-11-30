import { Order } from "../entities/Order";

export interface IOrderRepository {
    createOrder(order: Order): Promise<string>;
}