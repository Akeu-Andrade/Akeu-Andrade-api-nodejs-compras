import { User } from "../entities/User";

export interface IUserRepository {
    saveUser(user: User): Promise<string>;
    findByEmail(email: string): Promise<User | null>;
    getUsers(): Promise<User[]>;
}