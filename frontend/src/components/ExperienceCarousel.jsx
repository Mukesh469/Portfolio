import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { NavLink } from "react-router-dom";

const experiences = [
  {
    title: "Frontend Developer",
    company: "MyITROnline Global Service Pvt Ltd, New Delhi",
    period: "December 2024 – Present",
    siteLink: "https://myitronline.com/",
    points: [
      "Develop and maintain responsive, scalable user interfaces using React.js and Tailwind CSS.",
      "Enhanced user experience with smooth animations using Framer Motion.",
      "Actively contributed to production features for Texa23 (taxa23.com), including Homepage, Dashboard, and Profile modules.",
      "Integrated REST APIs and followed frontend best practices for performance and maintainability.",
      "Collaborated with team members using Git and GitHub for version control, code reviews, and deployments."
    ],
  },

  {
    title: "Training Specialist",
    company: "Tech Mahindra",
    period: "June 2024 - July 2024",
    points: [
      "Completed training on IT fundamentals and troubleshooting.",
      "Learned development methodologies and teamwork skills.",
      "Improved professional communication in tech environments.",
      "Developed a solid foundation in IT and project workflows.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExperienceList = () => {
  return (
    <section className="w-full px-4 py-12 max-w-7xl mx-auto text-white">
      <SEO
        title="Experience | Mukesh Kumar"
        description="Explore Mukesh Kumar's frontend development experience including projects, internships, and freelance work in React, JavaScript, HTML, and CSS."
        keywords={[
          "Mukesh Kumar experience",
          "Frontend Developer Portfolio",
          "React Developer Experience",
          "Internship projects",
          "Mukesh Kumar Resume",
        ]}
        image={`${window.location.origin}/assets/og-experience.png`} // optional custom OG image
      />

      <h2 className="text-4xl font-bold text-center mb-10 ">Experience</h2>

      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-indigo-300 mb-1">
              {exp.title}
            </h3>

            {exp.siteLink ? (
              <NavLink
                to={exp.siteLink}
                className="text-sm text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {exp.company}
              </NavLink>
            ) : (
              <p className="text-sm text-gray-400">{exp.company}</p>
            )}

            <p className="text-sm text-gray-500 italic mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
