import mongoose from "mongoose";

export const connectDB = async (_, res) => {
    try {
        const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
        console.log(`MongoDB connected successfully: mongodb://127.0.0.1:27017/${process.env.DB_NAME}.`);
    } catch (error) {
        console.error("MongoDB connection failed", error);
    }
}