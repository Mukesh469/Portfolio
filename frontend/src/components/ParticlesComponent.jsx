import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);

  // Initialize particles engine ONCE
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  // Handle screen resize safely
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 1024);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimized options for desktop & mobile
  const options = useMemo(
    () => ({
      background: {
        color: { value: "#0f172a" },
      },

      fpsLimit: isMobile ? 45 : 120,

      interactivity: {
        events: {
          onHover: { enable: !isMobile, mode: "grab" },
          onClick: { enable: !isMobile, mode: "repulse" },
        },
        modes: {
          grab: { distance: 120 },
          repulse: { distance: 80 },
        },
      },

      particles: {
        number: {
          value: isMobile ? 35 : 90, // 👈 reduced, not removed
          density: { enable: true },
        },
        color: { value: "#38bdf8" },
        links: {
          enable: !isMobile, // disable links on mobile (big perf win)
          color: "#38bdf8",
          distance: 140,
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.4 : 1,
          random: true,
          direction: "none",
          outModes: { default: "bounce" },
        },
        opacity: { value: 0.7 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: isMobile ? 2 : 3 } },
      },

      detectRetina: true,
    }),
    [isMobile]
  );

  if (!ready) return null;

  return (
    <Particles
      id={id}
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticlesComponent;
