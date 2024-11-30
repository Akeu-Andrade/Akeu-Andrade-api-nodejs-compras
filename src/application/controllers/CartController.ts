import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { AddProductToCartDTO } from '../dtos/cart/AddProductToCartDTO';
import { FinishCartDTO } from '../dtos/cart/FinishCartDTO';
import { IFinishCartUseCase } from '../use-cases/cart/interfaces/IFinishCartUseCase';
import { GetCartDTO } from '../dtos/cart/GetCartDTO';
import { IGetCartUseCase } from '../use-cases/cart/interfaces/IGetCartUseCase';
import { IAddProductToCartUseCase } from '../use-cases/cart/interfaces/ISaveCartUseCase';

@injectable()
export class CartController {
    constructor(
        @inject("IAddProductToCartUseCase") private addProductToCartUseCase: IAddProductToCartUseCase,
        @inject("IGetCartUseCase") private getCartUseCase: IGetCartUseCase,
        @inject("IFinishCartUseCase") private finshCartUseCase: IFinishCartUseCase
    ) {}

    getCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const cartDTO: GetCartDTO = { cartId: req.params.cartId };
        
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

    finshCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const cartDTO: FinishCartDTO = { cartId: req.params.cartId };

        try {
            await this.finshCartUseCase.invoke(cartDTO);
            res.status(201).json("Compra finalizada com sucesso");
        } catch (error) {
            next(error);
        }
    }
}