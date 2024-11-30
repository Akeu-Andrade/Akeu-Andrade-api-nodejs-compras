import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL as string);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};