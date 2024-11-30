import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { UserModel } from "../models/UserModel";

export class UserRepository implements IUserRepository {

    findByEmail(email: string): Promise<User | null> {
        return UserModel.findOne({ email });
    }

    async saveUser(user: User): Promise<string> {
        const newUser = {
            ...user,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        return (await UserModel.create(newUser)).id;
    }

    async getUsers(): Promise<User[]> {
        return UserModel.find();
    }

}