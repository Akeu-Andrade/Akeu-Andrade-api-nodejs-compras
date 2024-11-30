import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../../domain/repositories/IProductRepository";
import { IGetProductUseCase } from "./interfaces/IGetProductUseCase";
import { Product } from "../../../domain/entities/Product";

@injectable()
export class GetProductUseCase implements IGetProductUseCase {
    constructor(
        @inject("IProductRepository") private productRepository: IProductRepository
    ) {}

    async invoke(name: string): Promise<Product | null> {
        return await this.productRepository.findByName(name);
    }
}