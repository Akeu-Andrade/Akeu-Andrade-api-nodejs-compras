import { Router } from 'express';
import { ProductController } from '../../../application/controllers/ProductController';

const router = Router();
const productController = new ProductController();

router.post('/product', productController.create);

export { router as productRoutes };