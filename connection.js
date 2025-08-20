// import mongoose from "mongoose";

// export const connectDB = async (_, res) => {
//     try {
//         const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
//         console.log(`MongoDB connected successfully: mongodb://127.0.0.1:27017/${process.env.DB_NAME}.`);
//     } catch (error) {
//         console.error("MongoDB connection failed", error);
//     }
// }


// MYSQL connection

import mysql from "mysql";

async function connectDB(){
    try {
        const mysql_db = await mysql.createConnection({
             host: process.env.DB_HOST,
             user: process.env.DB_USER,
             password: process.env.DB_PASSWORD,
             database: process.env.DB_DATABASE,
        });
        console.log("Database connection successfull");
        return mysql_db;
    } catch (error) {
        console.error("Database connection failed", error);
    }
}

export default connectDB;