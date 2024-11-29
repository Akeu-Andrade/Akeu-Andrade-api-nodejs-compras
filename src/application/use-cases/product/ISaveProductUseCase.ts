import { SaveProductDTO } from "../../dtos/SaveProductDTO";

export interface ISaveProductUseCase {
    invoke(productDTO: SaveProductDTO): Promise<void>;
}
