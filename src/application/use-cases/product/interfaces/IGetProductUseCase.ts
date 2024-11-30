import { Product } from "../../../../domain/entities/Product";

export interface IGetProductUseCase {
    invoke(name?: string): Promise<Product | null>;
}
