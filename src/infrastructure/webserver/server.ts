import 'reflect-metadata';
import express from 'express';
import { productRoutes } from './routes/productRoutes';
import { connectDatabase } from '../../shared/config/database';
import '../../shared/dependencyInjection';
import { errorHandler } from '../../shared/errors/errorHandler';

const app = express();

app.use(express.json());

app.use(productRoutes);

app.use(errorHandler);

connectDatabase().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});