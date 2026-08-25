import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { useTypewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = ({
  onPrimaryAction,
  onProjectsClick,
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  const jumpToProjects = () => {
    if (onPrimaryAction) {
      onPrimaryAction();
    }
  };

  const [text] = useTypewriter({
    words: [
      "Fullstack Developer (MERN)",
      "Frontend Developer",
      "React Enthusiast",
      "Building smooth UIs",
    ],
    loop: 0,
  });

  return (
    <main className="relative flex min-h-screen flex-col px-4 pt-0 sm:px-8 lg:px-12">
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center pt-20 text-center"
      >
        <p className="mb-4 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200 sm:text-sm">
          Portfolio 2026
        </p>

        <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl">
          Hi, I&apos;m <span className="text-cyan-400">Mukesh</span>
        </h2>

        <p className="mb-4 text-lg text-slate-200 sm:text-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`inline-block transition-all duration-300 ${
              text === "" ? "blur-sm text-cyan-300 scale-[1.02]" : ""
            }`}
          >
            {text || "..."}
          </motion.span>
        </p>

        <p className="mb-10 text-sm tracking-wide text-slate-300 sm:text-base">
          <span className="font-semibold text-orange-400">IN</span>
          <span className="font-semibold text-white">DI</span>
          <span className="font-semibold text-green-400">A</span>
          <span>, New Delhi</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            onClick={jumpToProjects}
            className="group rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
          >
            Let&apos;s Connect
          </motion.button>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/20"
            target="_blank"
            href="https://drive.google.com/file/d/1FY2xYHEXSk_tF-rad5ZOr-yDagHSTHrx/view?usp=sharing"
            rel="noopener noreferrer"
          >
            View Resume
          </motion.a>
        </div>
      </motion.div>

      <ul className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 gap-4 sm:flex sm:flex-col lg:right-8">
        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <NavLink to="https://github.com/Mukesh469" target="_blank">
            <FaGithub
              size={40}
              className="rounded-full border border-white/25 bg-slate-900/45 p-2 text-white transition duration-300 hover:scale-110 hover:text-cyan-300"
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
              size={40}
              className="rounded-full border border-white/25 bg-slate-900/45 p-2 text-white transition duration-300 hover:scale-110 hover:text-cyan-300"
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
            href="mailto:mukesh512004@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to mukesh512004@example.com"
          >
            <MdEmail
              size={40}
              className="rounded-full border border-white/25 bg-slate-900/45 p-2 text-white transition duration-300 hover:scale-110 hover:text-cyan-300"
            />
          </a>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/8527747289"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp
              size={40}
              className="rounded-full border border-white/25 bg-slate-900/45 p-2 text-white transition duration-300 hover:scale-110 hover:text-cyan-300"
            />
          </a>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="tel:+918527747289"
            aria-label="Call phone number"
          >
            <MdPhone
              size={40}
              className="rounded-full border border-white/25 bg-slate-900/45 p-2 text-white transition duration-300 hover:scale-110 hover:text-cyan-300"
            />
          </a>
        </motion.li>
      </ul>

      <button
        onClick={onProjectsClick || jumpToProjects}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full border border-cyan-300/50 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
      >
        Scroll Down
      </button>
    </main>
  );
};

export default HeroSection;
