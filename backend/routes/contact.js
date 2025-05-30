// routes/contact.js
import express from 'express';
import { contactController } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/contact
router.post('/', contactController);

export default router;
