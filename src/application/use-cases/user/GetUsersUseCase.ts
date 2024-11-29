import { inject, injectable } from "tsyringe";
import { IGetUsersUseCase } from "./IGetUsersUseCase";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { User } from "../../../domain/entities/User";

@injectable()
export class GetUsersUseCase implements IGetUsersUseCase {
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) {}

    async invoke(): Promise<User[]> {
        return await this.userRepository.getUsers();
    }
}