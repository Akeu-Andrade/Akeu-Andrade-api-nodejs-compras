import mongoose, { Schema, Document, ObjectId } from 'mongoose';

interface IProductCartModel {
    productId: ObjectId;
    quantity: number;
    price: number;
}

interface ICartModel extends Document {
    userId: string;
    products: IProductCartModel[];
    createdAt: Date;
    updatedAt: Date;
}

const CartSchema = new Schema({
    userId: { type: String, required: true },
    products: [{
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});

export const CartModel = mongoose.model<ICartModel>('Cart', CartSchema);