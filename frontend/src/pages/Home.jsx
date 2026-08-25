import { useRef } from "react";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import DotField from "../components/DotField";
import MobileSocialLauncher from "../components/MobileSocialLauncher";
import Header from "../components/header/Header";

const Home = () => {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCertifications = () => {
    certificationsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="relative min-h-screen bg-[#06080f] text-white">
      <div className="relative z-[500]">
        <Header
          onSkillsClick={scrollToSkills}
          onProjectsClick={scrollToProjects}
          onExperienceClick={scrollToExperience}
          onCertificationsClick={scrollToCertifications}
          onContactClick={scrollToContact}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={500}
          bulgeOnly={true}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(220, 245, 255, 0.26)"
          gradientTo="rgba(180, 220, 255, 0.16)"
          glowColor="#05070e"
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <HeroSection
          onPrimaryAction={scrollToSkills}
        />
      </div>

      <section ref={skillsRef} className="relative z-10 scroll-mt-28">
        <SkillsSection />
      </section>

      <section ref={projectsRef} className="relative z-10 scroll-mt-28">
        <ProjectsSection />
      </section>

      <section ref={experienceRef} className="relative z-10 scroll-mt-28">
        <ExperienceSection />
      </section>

      <section ref={certificationsRef} className="relative z-10 scroll-mt-28">
        <CertificationsSection />
      </section>

      <section ref={contactRef} className="relative z-10 scroll-mt-28 bg-transparent text-black">
        <ContactForm />
      </section>

      <section className="relative z-10 bg-transparent text-white">
        <Footer />
      </section>

      <MobileSocialLauncher />

    </div>
  );
};

export default Home;
