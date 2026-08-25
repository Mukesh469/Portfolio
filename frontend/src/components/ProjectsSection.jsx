import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import EcommerceImg from "../assets/EcommerceImg.png";
import GngdDecorImg from "../assets/GngdDecorImg.png";
import DrumKitDesktopImg from "../assets/DrumKitDesktopImg.png";
import CatchPokemonImg from "../assets/CatchPokemonImg.png";
import FlaskTodoImg from "../assets/FlaskTodoImg.png";
import AgencyDesktopImg from "../assets/AgencyDesktopImg.png";

const projects = [
  {
    id: "company-texa23",
    title: "Taxa23 Product Modules",
    category: "Company",
    duration: "Dec 2024 - Present",
    role: "Frontend Developer",
    image: AgencyDesktopImg,
    shortDescription:
      "Built production modules for a live product used by business users.",
    description:
      "Contributed to core modules including Homepage, Dashboard, and Profile workflows. Focused on reusable UI components, performance optimizations, and API integration standards across team delivery.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "REST APIs", "Git"],
    highlights: [
      "Shipped reusable interface blocks used across multiple screens.",
      "Improved loading and rendering behavior in data-heavy views.",
      "Collaborated with backend and QA for production rollout cycles.",
    ],
    codeLink: null,
    liveLink: "https://taxa23.com/",
  },

  {
    id: "freelance-ecommerce",
    title: "Multi-Vendor Ecommerce Platform",
    category: "Freelance",
    duration: "2025",
    role: "Full-Stack Developer",
    image: EcommerceImg,
    shortDescription:
      "Large-scale freelance commerce app with vendor and admin workflows.",
    description:
      "Designed and built a multi-vendor platform with secure authentication, vendor storefront controls, order flow, and payment/shipping integrations ready for real customer transactions.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Shiprocket",
      "JWT",
      "Tailwind CSS",
    ],
    highlights: [
      "Vendor onboarding and independent product management.",
      "Order lifecycle tracking from checkout to dispatch.",
      "Role-based admin and seller dashboard controls.",
    ],
    codeLink: "https://github.com/multi-vendor-ecommerce/ecommerce",
    liveLink: "https://multi-vendor-ecommerce-project.netlify.app/",
  },
  
  {
    id: "freelance-gng",
    title: "GNG Decor Website",
    category: "Freelance",
    duration: "2025",
    role: "Frontend Developer",
    image: GngdDecorImg,
    shortDescription:
      "Conversion-focused business website for an interior design client.",
    description:
      "Developed and shipped a polished web experience featuring responsive layouts, service showcases, project imagery, and lead-generation contact pathways tuned for mobile and desktop users.",
    stack: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
    highlights: [
      "Mobile-first page composition with clear CTAs.",
      "Visual storytelling through curated project sections.",
      "Production deployment and iteration based on feedback.",
    ],
    codeLink: "https://github.com/Mukesh469/gngdecor-freelance",
    liveLink: "https://gng-decor.netlify.app/",
  },
  {
    id: "learning-pokemon",
    title: "Catch Pokemon Explorer",
    category: "Learning",
    duration: "2024",
    role: "Frontend Developer",
    image: CatchPokemonImg,
    shortDescription:
      "Interactive learning project focused on API-driven UI rendering.",
    description:
      "Built a Pokemon explorer interface to practice dynamic data fetching, reusable card UI, and lightweight interaction controls while maintaining smooth list rendering behavior.",
    stack: ["React", "CSS", "Pokemon API", "JavaScript"],
    highlights: [
      "Efficient list rendering and image loading handling.",
      "Interactive controls for quick user exploration.",
      "Improved component composition and state management skills.",
    ],
    codeLink: "https://github.com/me50/Mukesh469.git",
    liveLink: null,
  },
  {
    id: "learning-drumkit",
    title: "Drum Kit Interactive UI",
    category: "Learning",
    duration: "2024",
    role: "Frontend Developer",
    image: DrumKitDesktopImg,
    shortDescription:
      "Keyboard interaction project with audio and animation feedback.",
    description:
      "Created an interaction-first mini app to practice event handling, key mapping, motion timing, and visual response for a more engaging front-end experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Accurate keyboard-to-sound mapping.",
      "Button state transitions and visual feedback.",
      "Responsive layout for desktop and tablet viewing.",
    ],
    codeLink: "https://github.com/me50/Mukesh469.git",
    liveLink: null,
  },
  {
    id: "learning-flask",
    title: "Flask Todo Manager",
    category: "Learning",
    duration: "2024",
    role: "Full-Stack Learner",
    image: FlaskTodoImg,
    shortDescription:
      "CRUD-focused web app for backend and auth fundamentals.",
    description:
      "Implemented authentication-protected task management workflow with create/read/update/delete operations to strengthen backend integration and full-stack delivery fundamentals.",
    stack: ["Flask", "MySQL", "Bootstrap", "JavaScript"],
    highlights: [
      "Authentication and protected routes workflow.",
      "Reliable task CRUD and form validation behavior.",
      "Hands-on backend data modeling practice.",
    ],
    codeLink: "https://github.com/me50/Mukesh469.git",
    liveLink: null,
  },
];

const categories = ["All", "Company", "Freelance", "Learning"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!filteredProjects.find((project) => project.id === selectedId)) {
      setSelectedId(filteredProjects[0]?.id ?? "");
    }
  }, [filteredProjects, selectedId]);

  const selectedProject =
    filteredProjects.find((project) => project.id === selectedId) || filteredProjects[0];

  return (
    <section className="mx-auto w-full max-w-[1400px] scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl"
      >
        Project Explorer
      </motion.h2>

      <p className="mx-auto mb-8 max-w-3xl text-center text-slate-300">
        Browse projects by category and open full details with duration, stack, and delivery context.
        This layout is optimized for recruiters to scan quickly without excessive scrolling.
      </p>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((category) => {
          const count =
            category === "All"
              ? projects.length
              : projects.filter((project) => project.category === category).length;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                activeCategory === category
                  ? "bg-cyan-400 text-slate-950"
                  : "border border-white/25 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 xl:h-[calc(100vh-11.5rem)] xl:grid-cols-[340px_minmax(0,1fr)] 2xl:grid-cols-[380px_minmax(0,1fr)]">
        <aside className="rounded-3xl border border-white/15 bg-slate-900/55 p-4 backdrop-blur-sm xl:h-full xl:overflow-y-auto">
          <h3 className="mb-3 px-2 text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Select a Project
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 xl:block xl:space-y-2">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`w-full rounded-2xl p-3 text-left transition ${
                  selectedId === project.id
                    ? "bg-cyan-400/20 ring-1 ring-cyan-300/60"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <p className="text-sm font-semibold text-white">{project.title}</p>
                <p className="mt-1 text-xs text-slate-300">
                  {project.category} • {project.duration}
                </p>
              </button>
            ))}
          </div>
        </aside>

        {selectedProject ? (
          <article className="rounded-3xl border border-white/15 bg-slate-900/55 p-5 backdrop-blur-sm sm:p-6 xl:h-full xl:overflow-y-auto">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="h-44 w-full rounded-2xl object-cover sm:h-56 lg:h-64 xl:h-72 2xl:h-80"
            />

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                {selectedProject.category}
              </span>
              <span className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-slate-200">
                Duration: {selectedProject.duration}
              </span>
              <span className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-slate-200">
                Role: {selectedProject.role}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-cyan-300 sm:text-2xl lg:text-3xl">
              {selectedProject.title}
            </h3>
            <p className="mt-2 text-sm text-slate-200 sm:text-base">{selectedProject.shortDescription}</p>

            <div className="mt-5 rounded-2xl border border-white/15 bg-slate-950/40 p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                Project Description
              </h4>
              <p className="mt-2 text-sm text-slate-200 sm:text-base">{selectedProject.description}</p>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-slate-950/40 p-4">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                  Key Contributions
                </h4>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-200 sm:text-base">
                  {selectedProject.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/15 bg-slate-950/40 p-4">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                  Tech Stack Used
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedProject.liveLink ? (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
                >
                  View Live Project
                </a>
              ) : null}

              {selectedProject.codeLink ? (
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full border border-white/25 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  View Source Code
                </a>
              ) : (
                <span className="w-full rounded-full border border-white/25 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-slate-300 sm:w-auto">
                  Source Code: Private Company Repository
                </span>
              )}
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectsSection;
