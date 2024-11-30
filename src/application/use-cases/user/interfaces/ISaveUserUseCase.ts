import { SaveUserDTO } from "../../../dtos/user/SaveUserDTO";

export interface ISaveUserUseCase {
    invoke(userDTO: SaveUserDTO): Promise<void>;
}
