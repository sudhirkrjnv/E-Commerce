import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./routes/user.routes.js";

dotenv.config({})

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_, res)=>{
    return res.status(200).json({
        success:    'true',
        message: "I'm comming from backend",
    })
})
app.use(express.json());
app.use("/api/v1/user", userRoute);
app.listen(PORT, ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed")
    }
    console.log(`app is listening on PORT ${PORT}`);
})