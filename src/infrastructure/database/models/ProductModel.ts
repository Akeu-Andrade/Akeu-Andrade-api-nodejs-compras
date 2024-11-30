import mongoose, { Schema, Document } from 'mongoose';

interface IProductModel extends Document {
    name: string;
    price: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});

export const ProductModel = mongoose.model<IProductModel>('Product', ProductSchema);