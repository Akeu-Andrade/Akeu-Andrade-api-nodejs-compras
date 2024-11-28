import { CreateProductDTO } from "../../dtos/CreateProductDTO";

export interface ICreateProductUseCase {
    invoke(productDTO: CreateProductDTO): Promise<void>;
}
