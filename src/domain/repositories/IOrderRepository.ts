import { Order } from "../entities/Order";

export interface IOrderRepository {
    saveOrder(order: Order): Promise<string>;
}