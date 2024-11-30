import { injectable, inject } from "tsyringe";
import { ISaveUserUseCase } from "./ISaveUserUseCase";
import { SaveUserDTO } from "../../dtos/user/SaveUserDTO";
import { EmailAlreadyExistsError } from "../../../shared/errors/EmailAlreadyExistsError";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { User } from "../../../domain/entities/User";
import { SaveCartDTO } from "../../dtos/cart/SaveCartDTO";
import { ICartRepository } from "../../../domain/repositories/ICartRepository";

@injectable()
export class SaveUserUseCase implements ISaveUserUseCase {
    constructor(
        @inject('IUserRepository') private userRepository: IUserRepository,
        @inject('ICartRepository') private cartRepository: ICartRepository
    ) {}

    async invoke(userDTO: SaveUserDTO): Promise<void> {
        try {
            const existingUser = await this.userRepository.findByEmail(userDTO.email);
            if (existingUser) {
                throw new EmailAlreadyExistsError
            }

            const user = userDTO as User;

            await this.userRepository.saveUser(user);
            
            this.createCartEmpty(user.id);

        } catch (error) {
            throw error;
        }
    }

    async createCartEmpty(userId: string) {
        const cartDTO: SaveCartDTO = { userId };
        await this.cartRepository.createCart(cartDTO);
    }
}
