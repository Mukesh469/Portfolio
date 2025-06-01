import { useContext } from "react";
import { AppContext } from "../AppContext";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AboutModel from "./AboutModel";
import { MdEmail } from "react-icons/md";
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import SEO from "./SEO";

const HeroSection = () => {
  const { scrollToProject, isModelOpen, openModel } = useContext(AppContext);

  // Type Writter...
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'React Enthusiast', 'Building smooth UIs'],
    loop: 0
  })

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen px-4 relative">
      <SEO
        title="Mukesh Kumar | Frontend Developer Portfolio"
        description="Hi, I'm Mukesh Kumar. I'm a frontend developer specializing in React, JavaScript, and modern UI/UX. Welcome to my portfolio."
        keywords={["Mukesh Kumar", "Frontend Developer", "React", "JavaScript", "Portfolio"]}
        image={`${window.location.origin}/assets/og-home.png`}
      />
      <div className="flex flex-col justify-center items-center ">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-6"

        >
          Hi, I'm <span style={{ color: "#00bcd4" }}>Mukesh</span>
        </h1>

        <p className="text-lg sm:text-xl mb-4 text-gray-300">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`inline-block transition-all duration-300 ${text === '' ? 'blur-sm text-red-400 scale-[1.02]' : ''
              }`}
          >
            {text || '...'}
          </motion.span>
        </p>
        <p> from India</p>
        <div className="flex gap-5 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              className="group flex justify-center items-center gap-2 mb-6  text-black px-4 py-2 rounded hover:bg-slate-300 transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
              onClick={openModel}
              style={{
                backgroundColor: "#00bcd4",
              }}
            >
              About Me{" "}
              <span className="transition-transform duration-300 group-hover:scale-150">
                ↓
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              className="group flex justify-center items-center gap-2 mb-6 bg-slate-200 text-black px-4 py-2 rounded hover:bg-slate-300 transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
              target="_blank"
              href="https://drive.google.com/file/d/1JsHAHW1XcaYJ6JQbDzyauIoPtF7CjNBz/view?usp=sharing"
              rel="noopener noreferrer"
            >
              View Resume →
            </a>
          </motion.div>
        </div>
      </div>
      {/* <AboutModel /> */}
      {isModelOpen ? <AboutModel /> : ""}

      {/* Socials and button same as before */}
      <ul className="flex gap-5 sm:flex-col sm:absolute sm:top-1/2 sm:right-10 sm:transform sm:-translate-y-1/2 sm:gap-4">
        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <NavLink to="https://github.com/Mukesh469" target="_blank">
            <FaGithub
              size={45}
              className="transition-transform duration-300 transform hover:scale-110 hover:text-white"
            />
          </NavLink>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <NavLink to="https://linkedin.com/in/mukesh-kumar-86a182264/" target="_blank">
            <FaLinkedin
              size={45}
              className="transition-transform duration-300 transform hover:scale-110 hover:text-white"
            />
          </NavLink>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:heyiamfrom2025@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to heyiamfrom2025@example.com"
          >
            <MdEmail
              size={45}
              className="transition-transform duration-300 transform hover:scale-110 hover:text-white"
            />
          </a>
        </motion.li>
      </ul>

      <button
        onClick={scrollToProject}
        className="group flex justify-center items-center gap-2 text-xl relative top-40 md:top-30 lg:top-50 bg-[#00bcd4] hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg transition-transform duration-300 hover:scale-120 hover:cursor-pointer"
      >
        Projects
        <span className="text-2xl transition-transform duration-300 transform group-hover:scale-120">
          ↓
        </span>
      </button>
    </main>
  );
};

export default HeroSection;
