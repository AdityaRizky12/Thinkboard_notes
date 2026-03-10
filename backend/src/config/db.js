import mongoose from "mongoose"

 export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGODB CONNECT SUCCESSFULLY")
    } catch (error) {
        console.error("ERROR CONNECT MONGODB" , error)
        process.exit(1) // exic with failture
    }
}