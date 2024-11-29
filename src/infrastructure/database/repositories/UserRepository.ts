import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { UserModel } from "../models/UserModel";

export class UserRepository implements IUserRepository {

    findByEmail(email: string): Promise<User | null> {
        return UserModel.findOne({ email });
    }

    async saveUser(user: User): Promise<void> {
        const newUser = {
            ...user,
            createdAt: new Date()
        };

        await UserModel.create(newUser);
    }

    async getUsers(): Promise<User[]> {
        return UserModel.find();
    }

}