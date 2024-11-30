import mongoose, { Schema, Document } from 'mongoose';
import { Product } from '../../../domain/entities/Product';

interface ICartModel extends Document {
    userId: string;
    products: Product[];
    createdAt: Date;
    updatedAt: Date;
}

const CartSchema = new Schema({
    userId: { type: String, required: true },
    products: { type: Array, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});

export const CartModel = mongoose.model<ICartModel>('Cart', CartSchema);