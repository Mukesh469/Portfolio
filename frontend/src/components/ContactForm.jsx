import React, { useState } from "react";
import { FaExpand, FaPaperPlane, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
// import MukeshKumarPic from "../assets/professional.jpeg";
import MukeshKumarPic from "../assets/professional-pic-by-aakashbhaiya2.0.png";
import SEO from "./SEO";

const quickTags = ["MERN", "React", "Node.js", "MongoDB", "Git", "Deploy"];

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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    const trimmedValue = value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "name") {
      if (trimmedValue === "") return "Name is required!";
      if (trimmedValue.length < 3) return "Name must be at least 3 characters long.";
      if (trimmedValue.length > 50) return "Name can't exceed 50 characters.";
      return "";
    }

    if (name === "email") {
      if (trimmedValue === "") return "Email is required!";
      if (!emailRegex.test(trimmedValue)) return "Invalid email format!";
      return "";
    }

    if (name === "message") {
      if (trimmedValue === "") return "Message is required!";
      if (trimmedValue.length < 5) return "Message must be at least 5 characters.";
      if (trimmedValue.length > 1000) return "Message can't exceed 1000 characters.";
      return "";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      // const res = await fetch("http://localhost:3000/contact", {
      const res = await fetch("https://portfolio-backend-k8yz.onrender.com/contact", {
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
        toast.error(result.message || "Something went wrong.");
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-transparent px-4 py-14 text-white sm:px-6 lg:px-8">
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

      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md sm:p-8">
        <div className="pointer-events-none absolute -left-12 top-8 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-blue-400/15 blur-3xl" />

        <div className="relative grid gap-7 md:grid-cols-[1fr_1.25fr] md:items-start">
          <motion.aside
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="order-2 rounded-2xl border border-white/15 bg-slate-950/45 p-4 sm:p-5 md:order-1"
          >
            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="group relative block w-full overflow-hidden rounded-xl border border-white/20"
              aria-label="Open full profile image preview"
            >
              <img
                src={MukeshKumarPic}
                alt="Mukesh Kumar"
                className="h-44 w-full object-cover object-top transition duration-200 group-hover:scale-[1.02] sm:h-52"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/90 to-transparent px-3 py-2 text-xs font-semibold text-cyan-100">
                <span>Authentic profile photo</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-300/40 bg-cyan-300/20 px-2 py-0.5">
                  <FaExpand size={10} />
                  View
                </span>
              </div>
            </button>

            <h3 className="mt-4 text-xl font-semibold text-white">Let&apos;s Build Something Great</h3>
            <p className="mt-2 text-sm text-slate-300">
              Share your idea and I will help you turn it into a clean, production-ready product.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {quickTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-100"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.aside>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contact Me</h2>
            <p className="mt-2 text-sm text-slate-300">Simple and quick. Fill the details below and I will get back to you.</p>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-300"
                  placeholder="John Doe"
                />
                {formError.name ? <small className="mt-1.5 block text-red-400">{formError.name}</small> : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-300"
                  placeholder="you@example.com"
                />
                {formError.email ? <small className="mt-1.5 block text-red-400">{formError.email}</small> : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-cyan-300"
                  placeholder="Tell me about your requirement, timeline, and goals..."
                ></textarea>
                {formError.message ? <small className="mt-1.5 block text-red-400">{formError.message}</small> : null}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-50"
              >
                <FaPaperPlane /> {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-[9990] bg-slate-950/88 p-0 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsPreviewOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsPreviewOpen(false)}
            className="fixed right-3 top-20 z-[10000] rounded-full border border-white/30 bg-black/55 p-2 text-white transition hover:bg-black/80 sm:right-8 sm:top-8"
            aria-label="Close image preview"
          >
            <FaTimes size={16} />
          </button>

          <div
            className="mx-auto flex h-full w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full w-full overflow-hidden bg-slate-950 sm:h-[82vh] sm:w-[min(56vw,760px)] sm:rounded-2xl sm:border sm:border-white/20 sm:shadow-2xl">
              <img
                src={MukeshKumarPic}
                alt="Mukesh Kumar full preview"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ContactForm;
