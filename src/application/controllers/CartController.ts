import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { SaveCartDTO } from '../dtos/SaveCartDTO';

@injectable()
export class CartController {
    constructor(
    ) {}

    store = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const cardDTO: SaveCartDTO = req.body;
        
        try {
            
            res.status(201).json("Carrinho criado com sucesso");
        } catch (error) {
            next(error);
        }
    }
}