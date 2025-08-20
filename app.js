import express from "express";
// import connectDB from "./connection.js";
import "dotenv/config.js"

const app = express();
const port = process.env.PORT || 8007;

app.listen(port, () => {
    console.log(`The server is running at port: ${port}.`);
});