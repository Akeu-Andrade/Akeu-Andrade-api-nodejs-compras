import { User } from "../../../../domain/entities/User";

export interface IGetUsersUseCase {
    invoke(): Promise<User[]>;
}
