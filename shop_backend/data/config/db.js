import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (e) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
}
}

export default connectDB