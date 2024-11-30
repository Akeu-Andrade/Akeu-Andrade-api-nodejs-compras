import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { AddProductToCartDTO } from '../dtos/AddProductToCartDTO';
import { IAddProductToCartUseCase } from '../use-cases/cart/ISaveCartUseCase';

@injectable()
export class CartController {
    constructor(
        @inject("IAddProductToCartUseCase") private addProductToCartUseCase: IAddProductToCartUseCase
    ) {}

    addProductToCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const addProductDTO: AddProductToCartDTO = req.body;

        try {
            await this.addProductToCartUseCase.invoke(addProductDTO);
            res.status(201).json("Produto adicionado ao carrinho com sucesso");
        } catch (error) {
            next(error);
        }
    }
}