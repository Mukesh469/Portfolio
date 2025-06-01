import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id }) => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size before loading particles
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        const isSmall = window.innerWidth < 1024; // Below 1024px (mobile + tablet)
        setIsMobile(isSmall);

        if (!isSmall) {
          initParticlesEngine(async (engine) => {
            await loadSlim(engine);
          }).then(() => {
            setInit(true);
          });
        }
      }
    };

    checkMobile();

    // Optional: update on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#0f172a" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 150 },
          repulse: { distance: 100 },
        },
      },
      particles: {
        color: { value: "#38bdf8" },
        links: {
          enable: true,
          color: "#38bdf8",
          distance: 150,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          random: true,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: {
          value: 100,
          density: { enable: true },
        },
        opacity: { value: 0.8 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  //  Don't render anything on small screens
  if (isMobile || !init) return null;

  //  Render particles only on desktop
  return <Particles id={id} options={options} />;
};

export default ParticlesComponent;
