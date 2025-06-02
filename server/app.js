import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import studentRoutes from "./routes/student.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();



// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is running"));
// Authentication 
app.use("/api/auth", authRoutes);
// Student data
app.use("/api/student", studentRoutes);

// Start the server
const PORT = process.env.PORT || 5200;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});


export default app;
