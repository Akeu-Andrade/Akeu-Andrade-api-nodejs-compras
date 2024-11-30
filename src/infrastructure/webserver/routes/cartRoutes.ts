import { Router } from 'express';
import "reflect-metadata";
import { container } from 'tsyringe';
import '../../../shared/dependencyInjection';
import { CartController } from '../../../application/controllers/CartController';

const router = Router();
const cartController = container.resolve(CartController);

router.get('/cart/:cartId', cartController.getCart);
router.post('/cart/:cartId/add-product', cartController.addProductToCart);
router.post('/cart/:cartId/finish', cartController.finishCart);

export { router as CartRoutes };