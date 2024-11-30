import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { SaveUserDTO } from "../dtos/user/SaveUserDTO";
import { ISaveUserUseCase } from "../use-cases/user/interfaces/ISaveUserUseCase";
import { IGetUsersUseCase } from "../use-cases/user/interfaces/IGetUsersUseCase";

@injectable()
export class UserController {

    constructor(
        @inject("ISaveUserUseCase") private saveUserUseCase: ISaveUserUseCase,
        @inject("IGetUsersUseCase") private getUsersUseCase: IGetUsersUseCase
    ) {}

    store = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const userDTO: SaveUserDTO = req.body;

        try {
            await this.saveUserUseCase.invoke(userDTO);
            res.status(201).json("Usuário criado com sucesso");
        } catch (error) {
            next(error);
        }
    }

    getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const users = await this.getUsersUseCase.invoke();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }
}