// models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true },
  email:   { type: String, required: true, trim: true },
  message: { type: String, required: true }
}, {
  timestamps: { createdAt: 'createdAt' }
});

export default mongoose.model('Contact', contactSchema);
