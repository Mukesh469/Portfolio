import "./App.css";
import Header from "./components/Header.jsx";
import Project from "./components/Project.jsx";
import ParticlesComponent from "./components/ParticlesComponent.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/ExperienceCarousel.jsx";
import { AppProvider, AppContext } from "./AppContext.jsx";
import { useContext, useState, useEffect, useRef } from "react";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AppProvider>
      <ToastContainer />
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  const { projectRef } = useContext(AppContext);
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  // Scroll logic based on heroRef height
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show button once user scrolls past HeroSection
      setIsVisible(scrollTop > heroHeight);

      // Scroll progress for circular stroke
      const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    if (window.innerWidth >= 1024) {
      setShowParticles(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${!showParticles ? "bg-gray-900 bg-opacity-90 backdrop-blur-sm" : "bg-transparent"}`}>
      {/* Scroll-to-top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:scale-110 transition-transform duration-200 z-[9999]"
        >
          {/* Progress ring */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="5"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={283}
              strokeDashoffset={283 - (283 * scrollProgress) / 100}
              className="transform -rotate-90 origin-center"
            />
          </svg>

          {/* Up arrow icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Hero Section with ref */}
      <div  className="relative min-h-screen text-white" >
        <div className="absolute inset-0 -z-10">
          {showParticles && <ParticlesComponent id="particles" />}
        </div>
        <Header />
        <HeroSection heroRef />
      </div>

      <section  ref={projectRef} className="px-4 text-white mt-10 min-h-screen bg-transparent backdrop-blur-sm">
        <Project />
      </section>

      <section  className="bg-transparent backdrop-blur-sm text-white">
        <Skills />
      </section>

      <section className="bg-transparent backdrop-blur-sm text-white">
        <Experience />
      </section>

      <section className="text-black bg-transparent backdrop-blur-sm">
        <Routes>
          <Route path="/" element={<ContactForm />} />
        </Routes>
      </section>

      <section className="bg-transparent backdrop-blur-sm text-white">
        <Footer />
      </section>
    </div>
  );
}

export default App;
