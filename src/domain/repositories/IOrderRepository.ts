import { Order } from "../entities/Order";

export interface IOrderRepository {
    
    createOrder(order: Order): Promise<string>;

    countOrders(): Promise<number>;
    getTopProducts(): Promise<any[]>;
    getTotalRevenue(): Promise<number>;
}