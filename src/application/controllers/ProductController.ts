import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CreateProductDTO } from '../dtos/CreateProductDTO';
import { ICreateProductUseCase } from '../use-cases/product/ICreateProductUseCase';
import { IGetProductUseCase } from '../use-cases/product/IGetProductUseCase';

@injectable()
export class ProductController {
    constructor(
        @inject("ICreateProductUseCase") private createProductUseCase: ICreateProductUseCase,
        @inject("IGetProductUseCase") private getProductUseCase: IGetProductUseCase
    ) {}
    
    create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const productDTO: CreateProductDTO = req.body;

        try {
            await this.createProductUseCase.invoke(productDTO);
            res.status(201).json({ mensage: 'Product created successfully'});
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