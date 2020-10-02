import express from "express";
import connectDB from "./data/config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js"

dotenv.config()

connectDB()

const app = express();

app.get("/", (req, res) =>{
    res.send("Yoour shopping Now!")
})

app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))