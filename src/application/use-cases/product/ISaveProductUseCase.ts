import { SaveProductDTO } from "../../dtos/product/SaveProductDTO";

export interface ISaveProductUseCase {
    invoke(productDTO: SaveProductDTO): Promise<void>;
}
