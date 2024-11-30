import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { AddProductToCartDTO } from '../dtos/AddProductToCartDTO';
import { IAddProductToCartUseCase } from '../use-cases/cart/ISaveCartUseCase';
import { IGetCartUseCase } from '../use-cases/cart/IGetCartUseCase';
import { GetCartDTO } from '../dtos/GetCartDTO';

@injectable()
export class CartController {
    constructor(
        @inject("IAddProductToCartUseCase") private addProductToCartUseCase: IAddProductToCartUseCase,
        @inject("IGetCartUseCase") private getCartUseCase: IGetCartUseCase
    ) {}

    getCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const cartDTO: GetCartDTO = { userId: req.params.userId };
        
        try {
            const cart = await this.getCartUseCase.invoke(cartDTO);
            res.status(200).json(cart);
        } catch (error) {
            next(error);
        }
    }

    addProductToCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const cartId = req.params.cartId;
        const addProductDTO: AddProductToCartDTO = { ...req.body, cartId: cartId };

        try {
            await this.addProductToCartUseCase.invoke(addProductDTO);
            res.status(201).json("Produto adicionado ao carrinho com sucesso");
        } catch (error) {
            next(error);
        }
    }
}