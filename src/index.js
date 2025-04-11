import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { prisma, pool } from "./config./db.js"; 
import authRoutes from './routes/authRoutes.js';
import articleRoutes from "./routes/articleRoute.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;


// Middlewares
app.use(express.json());
app.use(cors()); 

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/articles", articleRoutes);

// Basic test route
app.get('/', (req, res) => {
    res.send('Server is running...');
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});
