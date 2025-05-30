import "./App.css";
import Header from "./components/Header.jsx";
import Project from "./components/Project.jsx";
import ParticlesComponent from "./components/ParticlesComponent.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/ExperienceCarousel.jsx";
import { AppProvider, AppContext } from "./AppContext.jsx";
import { useContext, useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AppProvider>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  const { projectRef } = useContext(AppContext);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optional: Scroll to top button functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Scroll to top button (conditionally rendered) */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:scale-110 transition-transform duration-200 z-[2147483647]"
          aria-label="Scroll to top"
        >
          {/* Circular progress background */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            {/* Full circle (background) */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="5"
            />
            {/* Progress circle (foreground) */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={283} // 2πr (2*3.14159*45)
              strokeDashoffset={283 - (283 * scrollProgress / 100)}
              className="transform -rotate-90 origin-center"
            />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <div className="relative min-h-screen text-white">
        <div className="absolute inset-0 -z-10">
          <ParticlesComponent id="particles" />
        </div>
        <Header />
        <HeroSection />
      </div>

      <section
        id="project"
        ref={projectRef}
        className="px-4 text-white mt-10 min-h-screen bg-white/0 backdrop-blur-sm"
      >
        <Project />
      </section>

      <section id="skills" className=" bg-white/0 backdrop-blur-sm">
        <Skills />
      </section>

      <section id="Experience" className="bg-white/0 backdrop-blur-sm">
        <Experience />
      </section>

      <section id="contact-section" className=" text-black  bg-white/0 backdrop-blur-sm">
        <Routes>
          <Route path="/" element={<ContactForm />} />
        </Routes>
      </section>

      <section id="footer-section">
        <Footer />
      </section>
    </>
  );
}

export default App;