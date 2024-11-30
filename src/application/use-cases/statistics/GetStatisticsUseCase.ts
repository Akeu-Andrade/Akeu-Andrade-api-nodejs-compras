import { inject, injectable } from "tsyringe";
import { IGetStatisticsUseCase } from "./IGetStatisticsUseCase";
import { IOrderRepository } from "../../../domain/repositories/IOrderRepository";

@injectable()
export class GetStatisticsUseCase implements IGetStatisticsUseCase {
    constructor(
        @inject("IOrderRepository") private orderRepository: IOrderRepository
    ) {}

    async invoke(): Promise<any> {
        const totalSales = await this.orderRepository.countOrders();
        const totalRevenue = await this.orderRepository.getTotalRevenue();
        const topProducts = await this.orderRepository.getTopProducts();

        return {
            totalSales,
            totalRevenue,
            topProducts
        };
    }

}