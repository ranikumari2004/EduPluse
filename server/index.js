import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import coursesRoute from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config(); // Load env variables

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect Database
connectDB();

// Routes
app.use("/api/courses", coursesRoute);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
