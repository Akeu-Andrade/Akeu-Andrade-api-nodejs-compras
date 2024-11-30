import { Order } from "../../../domain/entities/Order";
import { IOrderRepository } from "../../../domain/repositories/IOrderRepository";
import { OrderModel } from "../models/OrderModel";

export class OrderRepository implements IOrderRepository {
    async createOrder(order: Order): Promise<string> {
        return (await OrderModel.create(order)).id;
    }

    countOrders(): Promise<number> {
        return OrderModel.countDocuments();
    }

    async getTopProducts(): Promise<any[]> {
        return OrderModel.aggregate([
            { $unwind: "$products" },
            {
                $group: {
                    _id: "$products.productId",
                    totalQuantity: { $sum: "$products.quantity" }
                }
            },
            {
                $sort: { totalQuantity: -1 }
            },
            { $limit: 5 },
            {
                $lookup: {
                    from: "products", 
                    localField: "_id",
                    foreignField: "id",
                    as: "productDetails"
                }
            },
            {
                $unwind: "$productDetails"
            },
            {
                $project: {
                    productId: "$_id",
                    quantity: "$totalQuantity",
                    name: "$productDetails.name"
                }
            }
        ]);
    }

    async getTotalRevenue(): Promise<number> {
        const result = await OrderModel.aggregate([
            { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } }
        ]);
        return result[0]?.totalRevenue || 0;
    }
}