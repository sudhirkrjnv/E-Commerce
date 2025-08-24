import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./routes/user.routes.js";
import productRoute from "./routes/product.routes.js";
import cors from "cors"

dotenv.config({})

const app = express();

const PORT = process.env.PORT || 6000;

app.get('/', (_, res)=>{
    return res.status(200).json({
        success: 'true',
        message: "Welcome to the server of Amazon crated by TrueService, this belongs to Sudhir Kumar",
    })
})
app.use(express.json());
const corsOption = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOption));
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.listen(PORT, ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed")
    }
    console.log(`app is listening on PORT ${PORT}`);
})