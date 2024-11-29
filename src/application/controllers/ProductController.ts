import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CreateProductDTO } from '../dtos/CreateProductDTO';
import { ICreateProductUseCase } from '../use-cases/product/ICreateProductUseCase';

@injectable()
export class ProductController {
    constructor(
        @inject("ICreateProductUseCase") private createProductUseCase: ICreateProductUseCase
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

    getProducts = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const { name } = request.body;
            
            response.status(200).json();
        } catch (error) {
            next(error);
        }
    }
}