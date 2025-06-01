import React, { useState, useEffect } from "react";
import ContactusImg from "../assets/ContactusImg.png";
import { FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import SEO from "./SEO";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        toast.success(result.message || "Message sent successfully!")
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error(result.message || "Something went wrong.");
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
        image={`${window.location.origin}/assets/og-contact.png`} // or just remove this line to use the default
      />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:p-12">
        {/* Image - hidden on small screens */}
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
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 10a5 5 0 100-10 5 5 0 000 10z" />
                  <path fillRule="evenodd" d="M.458 17.041A10 10 0 0110 13a10 10 0 019.542 4.041A.5.5 0 0119 18H1a.5.5 0 01-.542-.959z" clipRule="evenodd" />
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
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
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
                required
              />
            </div>
          </div>


          {/* Message */}
          <div>

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
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
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition flex gap-2 items-center hover:cursor-pointer"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
        
      </div>
      
    </section>
  );
};

export default ContactForm;
