import { User } from "../entities/User";

export interface IUserRepository {
    saveUser(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
}