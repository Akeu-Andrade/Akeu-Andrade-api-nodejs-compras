import mongoose, { Schema, Document } from 'mongoose';

interface IUserModel extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});

export const UserModel = mongoose.model<IUserModel>('User', UserSchema);