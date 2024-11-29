import { Product } from "../../../domain/entities/Product";
import { IProductRepository } from "../../../domain/repositories/IProductRepository";
import { ProductModel } from "../models/ProductModel";

export class ProductRepository implements IProductRepository {

    async saveProduct(product: Product): Promise<void> {
        const newProduct = {
            ...product,
            createdAt: new Date()
        };

        await ProductModel.create(newProduct);
    }

    async findByName(name: string): Promise<Product | null> {
        return ProductModel.findOne({ name });
    }

}