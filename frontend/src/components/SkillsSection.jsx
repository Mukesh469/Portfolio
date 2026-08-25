import { motion } from "framer-motion";
import { FaCodeBranch, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRender, SiVercel } from "react-icons/si";

const coreSkills = [
  {
    title: "Frontend Development",
    level: 92,
    summary: "Building responsive React interfaces with clean component architecture and smooth UX.",
    icon: FaReact,
    accent: "from-cyan-300 to-sky-400",
  },
  {
    title: "Backend Development",
    level: 84,
    summary: "Creating robust Node.js and Express APIs with validation, integration, and deployment focus.",
    icon: FaNodeJs,
    accent: "from-emerald-300 to-lime-400",
  },
  {
    title: "MERN Stack Development",
    level: 89,
    summary: "Delivering end-to-end apps across MongoDB, Express, React, and Node workflows.",
    icon: SiMongodb,
    accent: "from-teal-300 to-cyan-400",
  },
  {
    title: "Version Control (Git)",
    level: 86,
    summary: "Using Git and GitHub for branch-based collaboration, reviews, and reliable releases.",
    icon: FaGitAlt,
    accent: "from-orange-300 to-red-400",
  },
];

const toolStack = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaCodeBranch },
  { name: "Render", icon: SiRender },
  { name: "Vercel", icon: SiVercel },
  { name: "Hostinger", icon: FaGitAlt },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SkillsSection = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
          Skill Matrix
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Modern MERN Developer Toolkit</h2>
        <p className="mt-4 text-slate-300">
          I work across frontend and backend with production-focused MERN workflows, Git-based delivery,
          and cloud deployment using Render, Vercel, and Hostinger.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-5 md:grid-cols-2"
      >
        {coreSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="rounded-3xl border border-white/15 bg-slate-900/60 p-5 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{skill.summary}</p>
                </div>
                <div className={`rounded-2xl bg-gradient-to-br ${skill.accent} p-3 text-slate-950`}>
                  <Icon size={22} />
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-300">
                  <span>Confidence</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.accent}`}
                  />
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="mt-8 overflow-hidden rounded-3xl border border-white/15 bg-slate-900/55 p-4 backdrop-blur-sm"
      >
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-cyan-300">
          <FaCodeBranch size={14} />
          <span>Tools and Deployment Platforms</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {toolStack.map((tool, index) => {
            const ToolIcon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ scale: 1.06 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"
              >
                <ToolIcon size={14} />
                <span>{tool.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
