import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { SaveProductDTO } from '../dtos/SaveProductDTO';
import { IGetProductUseCase } from '../use-cases/product/IGetProductUseCase';
import { ISaveProductUseCase } from '../use-cases/product/ISaveProductUseCase';

@injectable()
export class ProductController {
    constructor(
        @inject("ISaveProductUseCase") private saveProductUseCase: ISaveProductUseCase,
        @inject("IGetProductUseCase") private getProductUseCase: IGetProductUseCase
    ) {}
    
    store = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const productDTO: SaveProductDTO = req.body;

        try {
            await this.saveProductUseCase.invoke(productDTO);
            res.status(201).json({ mensage: 'Produto criado com sucesso' });
        } catch (error) {
            next(error);
        }
    }

    getProduct = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const { name } = request.body;
            const product = await this.getProductUseCase.invoke(name);
            response.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }
}