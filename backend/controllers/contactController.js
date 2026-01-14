import Contact from "../models/Contact.js";
import { sendContactThankYouEmail, sendAdminContactNotification } from "../services/emailService.js";

export const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    if (message.length < 5 || message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Message should be between 5 and 1000 characters.",
      });
    }

    // Save contact
    await Contact.create({ name, email, message });

    // Sending email
    await Promise.all([
      sendContactThankYouEmail({ name, email }),
      sendAdminContactNotification({ name, email, message }),
    ])

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
