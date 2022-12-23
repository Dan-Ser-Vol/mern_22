import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routers/auth.js";
import postRouter from "./routers/posts.js";

import fileUpload from "express-fileupload";


const app = express();
dotenv.config();

// constants
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload())
app.use(express.static("uploads"));


//routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);



async function start() {
    try {
        mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rpgg6bb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
            () => {
                console.log("DB connected!!!");
            }
        );
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

app.get("/", (req, res) => {
    return res.json({successful: true});
});

start();
