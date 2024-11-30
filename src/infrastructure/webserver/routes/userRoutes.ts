import { Router } from 'express';
import "reflect-metadata";
import { container } from 'tsyringe';
import '../../../shared/dependencyInjection';
import { UserController } from '../../../application/controllers/UserController';

const router = Router();
const userController = container.resolve(UserController);

router.post('/user', userController.store);
router.get('/users', userController.getUsers);

export { router as userRoutes };