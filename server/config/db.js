import mongoose from "mongoose";

// Add your DB name (interviewguru) at the end of your URI after the slash
const MONGO_URI = "mongodb+srv://swasthikp03:swasthik@swasthikprabhu.fabhbaq.mongodb.net/interviewguru?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
