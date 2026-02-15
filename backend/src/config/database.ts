import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
console.log(process.env.MONGODB_URI)
const Mongo_URL=process.env.MONGODB_URI;
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(Mongo_URL as string);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
