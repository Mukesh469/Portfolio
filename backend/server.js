// server.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import contactRoutes from './routes/contact.js';

const app = express(); //  Initialize app FIRST

//  Enable CORS only for your frontend
app.use(cors({
  origin: 'https://portfolio-frontend-tu07.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

//  Connect to MongoDB
connectDB();

//  Middleware
app.use(express.json());

//  Routes
app.use('/contact', contactRoutes);

//  Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
