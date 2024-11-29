import { injectable, inject } from "tsyringe";
import { ISaveUserUseCase } from "./ISaveUserUseCase";
import { SaveUserDTO } from "../../dtos/SaveUserDTO";
import { EmailAlreadyExistsError } from "../../../shared/errors/EmailAlreadyExistsError";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { User } from "../../../domain/entities/User";

@injectable()
export class SaveUserUseCase implements ISaveUserUseCase {
    constructor(
        @inject('IUserRepository') private userRepository: IUserRepository
    ) {}

    async invoke(userDTO: SaveUserDTO): Promise<void> {
        try {
            const existingUser = await this.userRepository.findByEmail(userDTO.email);
            if (existingUser) {
                throw new EmailAlreadyExistsError
            }

            const user = {
                ...userDTO,
                createdAt: new Date()
            } as User;

            await this.userRepository.saveUser(user);
        } catch (error) {
            throw error;
        }
    }
}