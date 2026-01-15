import React, { useState } from "react";
import ContactusImg from "../assets/ContactusImg.png";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import SEO from "./SEO";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();

    // Update formData with the raw value (so spaces aren’t stripped mid-typing)
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear any existing error for this field
    setFormError((prev) => ({ ...prev, [name]: "" }));

    // Regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Field-specific validation:
    if (name === "name") {
      if (trimmedValue === "") {
        setFormError((prev) => ({
          ...prev,
          name: "Name is required!",
        }));
      } else if (trimmedValue.length < 3) {
        setFormError((prev) => ({
          ...prev,
          name: "Name must be at least 3 characters long.",
        }));
      } else if (trimmedValue.length > 50) {
        setFormError((prev) => ({
          ...prev,
          name: "Name can't exceed 50 characters.",
        }));
      } else {
        setFormError((prev) => ({ ...prev, name: "" }));
      }
    }

    if (name === "email") {
      if (trimmedValue === "") {
        setFormError((prev) => ({
          ...prev,
          email: "Email is required!",
        }));
      } else if (!emailRegex.test(trimmedValue)) {
        setFormError((prev) => ({
          ...prev,
          email: "Invalid email format!",
        }));
      } else {
        setFormError((prev) => ({ ...prev, email: "" }));
      }
    }

    if (name === "message") {
      if (trimmedValue === "") {
        setFormError((prev) => ({
          ...prev,
          message: "Message is required!",
        }));
      } else if (trimmedValue.length < 5) {
        setFormError((prev) => ({
          ...prev,
          message: "Message must be at least 5 characters.",
        }));
      } else if (trimmedValue.length > 1000) {
        setFormError((prev) => ({
          ...prev,
          message: "Message can't exceed 1000 characters.",
        }));
      } else {
        setFormError((prev) => ({ ...prev, message: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any prior errors
    setFormError({ name: "", email: "", message: "" });

    const error = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation
    if (!trimmedName) {
      error.name = "Name is required!";
    } else if (trimmedName.length < 3) {
      error.name = "Name must be at least 3 characters.";
    } else if (trimmedName.length > 50) {
      error.name = "Name can't exceed 50 characters.";
    }

    // Email validation
    if (!trimmedEmail) {
      error.email = "Email is required!";
    } else if (!emailRegex.test(trimmedEmail)) {
      error.email = "Invalid email format!";
    }

    // Message validation
    if (!trimmedMessage) {
      error.message = "Message is required!";
    } else if (trimmedMessage.length < 5) {
      error.message = "Message must be at least 5 characters.";
    } else if (trimmedMessage.length > 1000) {
      error.message = "Message can't exceed 1000 characters.";
    }

    // If there are errors, set them and abort submit
    if (Object.keys(error).length > 0) {
      setFormError(error);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        "https://portfolio-backend-k8yz.onrender.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
          }),
        }
      );

      const result = await res.json();
      if (result.success) {
        toast.success(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // In case the backend responds with success: false
        toast.error(result.message || "Something went wrong.");
      }
    } catch (err) {
      // Network or other unexpected error
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-6 bg-transparent text-white">
      <SEO
        title="Contact | Mukesh Kumar"
        description="Get in touch with Mukesh Kumar. Reach out for freelance work, collaborations, or any frontend development inquiries."
        keywords={[
          "Mukesh Kumar",
          "Contact Mukesh",
          "Frontend Developer Contact",
          "Hire React Developer",
          "Get in Touch",
        ]}
        image={`${window.location.origin}/assets/og-contact.png`}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:p-12">
        {/* Image – hidden on small screens */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src={ContactusImg}
            alt="Contact Us"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Form */}
        <form className="w-full md:w-1/2 space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-semibold">Get in Touch</h2>

          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 10a5 5 0 100-10 5 5 0 000 10z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 17.041A10 10 0 0110 13a10 10 0 019.542 4.041A.5.5 0 0119 18H1a.5.5 0 01-.542-.959z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border border-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 text-white placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
            {formError.name && (
              <small className="text-red-500">{formError.name}</small>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border border-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 text-white placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>
            {formError.email && (
              <small className="text-red-500">{formError.email}</small>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              onChange={handleChange}
              value={formData.message}
              className="bg-transparent border border-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white placeholder-gray-400"
              placeholder="Type your message here..."
            ></textarea>
            {formError.message && (
              <small className="text-red-500">{formError.message}</small>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition flex gap-2 items-center disabled:opacity-50"
          >
            <FaPaperPlane /> {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
