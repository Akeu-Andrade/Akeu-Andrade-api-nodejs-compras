import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { AddProductToCartDTO } from '../dtos/cart/AddProductToCartDTO';
import { FinishCartDTO } from '../dtos/cart/FinishCartDTO';
import { IFinishCartUseCase } from '../use-cases/cart/interfaces/IFinishCartUseCase';
import { GetCartDTO } from '../dtos/cart/GetCartDTO';
import { IGetCartUseCase } from '../use-cases/cart/interfaces/IGetCartUseCase';
import { IAddProductUseCase } from '../use-cases/cart/interfaces/IAddProductUseCase';

@injectable()
export class CartController {
    constructor(
        @inject("IAddProductUseCase") private addProductUseCase: IAddProductUseCase,
        @inject("IGetCartUseCase") private getCartUseCase: IGetCartUseCase,
        @inject("IFinishCartUseCase") private finishCartUseCase: IFinishCartUseCase
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
            await this.addProductUseCase.invoke(addProductDTO);
            res.status(201).json("Produto adicionado ao carrinho com sucesso");
        } catch (error) {
            next(error);
        }
    }

    finishCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const cartDTO: FinishCartDTO = { cartId: req.params.cartId };

        try {
            await this.finishCartUseCase.invoke(cartDTO);
            res.status(201).json("Compra finalizada com sucesso");
        } catch (error) {
            next(error);
        }
    }
}