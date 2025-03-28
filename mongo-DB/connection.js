import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://sakshibhawsar:SUM%402705@learning-mern.snyqu.mongodb.net/")
        console.log("MongoDB connected successfully")
    }
    catch(err){
        console.log("Error connecting to MongoDB")
        process.exit(1)
    } //
} // this is the connection function