import { injectable, inject } from "tsyringe";
import { SaveProductDTO } from "../../dtos/SaveProductDTO";
import { ISaveProductUseCase } from "./ISaveProductUseCase";
import { IProductRepository } from "../../../domain/repositories/IProductRepository";
import { Product } from "../../../domain/entities/Product";
import { InvalidParametersError } from "../../../shared/errors/InvalidParametersError";
import { ProductAlreadyExistsError } from "../../../shared/errors/ProductAlreadyExistsError";

@injectable()
export class SaveProductUseCase implements ISaveProductUseCase {
    constructor(
        @inject('IProductRepository') private productRepository: IProductRepository
    ) {}

    async invoke(productDTO: SaveProductDTO): Promise<void> {
        try {
            if (!productDTO.name) {
                throw new InvalidParametersError();
            }

            const productExists = await this.productRepository.findByName(productDTO.name);
    
            if (productExists) {
                throw new ProductAlreadyExistsError();
            }

            const product = {
                ...productDTO
            } as Product;

            await this.productRepository.saveProduct(product);
        } catch (error) {
            throw error;
        }
    }
}