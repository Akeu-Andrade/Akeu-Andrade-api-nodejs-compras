import 'reflect-metadata';
import express from 'express';
import { productRoutes } from './routes/productRoutes';
import { connectDatabase } from '../../shared/config/database';
import '../../shared/dependencyInjection';
import { ErrorHandler } from '../../shared/errors/ErrorHandler';
import { userRoutes } from './routes/userRoutes';
import { CartRoutes } from './routes/cartRoutes';

const app = express();

app.use(express.json());

app.use(productRoutes);
app.use(userRoutes);
app.use(CartRoutes);

app.use(ErrorHandler);

connectDatabase().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});