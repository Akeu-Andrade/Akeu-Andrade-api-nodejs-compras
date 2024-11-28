import { NextFunction, Request, Response } from 'express';

export class ProductController {
    
    create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
        
            res.status(201).json('Product created');
        } catch (error) {
            next(error);
        }
    }
}