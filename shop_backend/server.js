import express from "express";
import connectDB from "./data/config/db.js";
import morgan from 'morgan';
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js"

dotenv.config()
const app = express();


connectDB()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }

app.use(express.json())




app.get("/", (req, res) =>{
    res.send("Yoour shopping Now!")
})

app.use("/api/products", productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))