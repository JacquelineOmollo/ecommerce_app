import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/user.js";
import Product  from "./models/product.js";
import Review from "./models/review.js";
import Order from "./models/orders.js";
import connectDB from "./data/config/db.js";

dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Review.deleteMany()

        // this will add an array of users
        const createdUsers = await User.insertMany(users)
        // this will get the admin user for the above array
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })
        await Product.insertMany(sampleProducts)
        
        console.log("Data Imported!".green.inverse)
        process.exit()
    }
    
    catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destoryData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Review.deleteMany()

        console.log("Data Destroyed!".red.inverse)
        process.exit()
    }
    catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === "-d"){
    destoryData()
}else{
    importData()
}
