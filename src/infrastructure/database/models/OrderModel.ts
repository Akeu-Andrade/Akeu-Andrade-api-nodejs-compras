import mongoose, { Schema, Document, ObjectId } from 'mongoose';

interface IOrderProduct extends Document {
    productId: ObjectId;
    quantity: number;
    price: number;
}

interface IOrderModel extends Document {
    userId: string;
    products: IOrderProduct[];
    totalPrice: number;
    date: Date;
}

const OrderSchema = new Schema({
    userId: { type: String, required: true },
    products: [
        {
            productId: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    totalPrice: { type: Number, required: true },
    date: { type: Date, required: true }
});

export const OrderModel = mongoose.model<IOrderModel>('Order', OrderSchema);