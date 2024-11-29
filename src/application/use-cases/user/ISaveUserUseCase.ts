import { SaveUserDTO } from "../../dtos/SaveUserDTO";

export interface ISaveUserUseCase {
    invoke(userDTO: SaveUserDTO): Promise<void>;
}
