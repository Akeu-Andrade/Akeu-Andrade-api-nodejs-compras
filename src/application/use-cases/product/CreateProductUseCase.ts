import { injectable, inject } from "tsyringe";
import { CreateProductDTO } from "../../dtos/CreateProductDTO";
import { ICreateProductUseCase } from "./ICreateProductUseCase";
import { IProductRepository } from "../../../domain/repositories/IProductRepository";
import { Product } from "../../../domain/entities/Product";

@injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
    constructor(
        @inject('IProductRepository') private productRepository: IProductRepository
    ) {}

    async invoke(productDTO: CreateProductDTO): Promise<void> {
        try {
            if (!productDTO.name) {
                // throw new InvalidParametersError();
            }

            const productExists = await this.productRepository.findByName(productDTO.name);
    
            if (productExists) {
                // throw new ProductAlreadyExistsError();
                throw Error('Product already exists');
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