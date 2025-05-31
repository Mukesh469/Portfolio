// server.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import contactRoutes from './routes/contact.js';


// to debug that it actually load or not 
const app = express();

// Connect to Mongo
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Mount routes
app.use('/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
