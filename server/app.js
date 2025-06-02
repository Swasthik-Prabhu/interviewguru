// app.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
import indexRoutes from "./routes/index.js";
app.use("/api", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
