import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = ({
  onSkillsClick,
  onProjectsClick,
  onExperienceClick,
  onCertificationsClick,
  onContactClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 450], [1, 0.88]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const runAndClose = (action) => {
    if (action) {
      action();
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      style={{ opacity }}
      className="fixed left-1/2 top-3 z-[220] w-[min(94%,980px)] -translate-x-1/2"
    >
      <div className="flex items-center justify-between gap-3 rounded-full border border-white/20 bg-slate-950/70 px-3 py-2 shadow-2xl backdrop-blur-2xl">
        <h1 className="truncate rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-bold text-white sm:px-4 sm:text-base">
          Mukesh | Web Developer
        </h1>

        <nav className="hidden items-center gap-1.5 text-xs text-slate-100 md:flex md:gap-2 md:text-sm">
          <button
            onClick={onSkillsClick}
            className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 transition hover:bg-cyan-400/25"
          >
            Skills
          </button>
          <button
            onClick={onProjectsClick}
            className="rounded-full border border-white/25 bg-white/5 px-3 py-1.5 transition hover:bg-white/15"
          >
            Projects
          </button>
          <button
            onClick={onExperienceClick}
            className="rounded-full border border-white/25 bg-white/5 px-3 py-1.5 transition hover:bg-white/15"
          >
            Experience
          </button>
          <button
            onClick={onCertificationsClick}
            className="rounded-full border border-white/25 bg-white/5 px-3 py-1.5 transition hover:bg-white/15"
          >
            Certifications
          </button>
          <button
            onClick={onContactClick}
            className="rounded-full border border-white/25 bg-white/5 px-3 py-1.5 transition hover:bg-white/15"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="absolute right-0 top-[calc(100%+0.55rem)] z-[75] grid w-[min(92vw,320px)] gap-2 rounded-2xl border border-white/20 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-2xl md:hidden">
          <button
            onClick={() => runAndClose(onSkillsClick)}
            className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-3 py-2 text-left text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
          >
            Skills
          </button>
          <button
            onClick={() => runAndClose(onProjectsClick)}
            className="rounded-xl border border-white/25 bg-white/5 px-3 py-2 text-left text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Projects
          </button>
          <button
            onClick={() => runAndClose(onExperienceClick)}
            className="rounded-xl border border-white/25 bg-white/5 px-3 py-2 text-left text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Experience
          </button>
          <button
            onClick={() => runAndClose(onCertificationsClick)}
            className="rounded-xl border border-white/25 bg-white/5 px-3 py-2 text-left text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Certifications
          </button>
          <button
            onClick={() => runAndClose(onContactClick)}
            className="rounded-xl border border-white/25 bg-white/5 px-3 py-2 text-left text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Contact
          </button>
        </div>
      ) : null}
    </motion.header>
  );
};

export default Header;