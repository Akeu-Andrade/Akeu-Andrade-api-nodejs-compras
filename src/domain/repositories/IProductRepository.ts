import { Product } from "../entities/Product";

export interface IProductRepository {
    saveProduct(product: Product): Promise<void>;
    findByName(name: string): Promise<Product | null>;
    getById(id: string): Promise<Product>;
}