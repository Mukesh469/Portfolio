import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import AgencyDesktopImg from "../assets/AgencyDesktopImg.png";
import DrumKitImg from "../assets/DrumKitDesktopImg.png";
import CatchPokemonImg from "../assets/CatchPokemonImg.png";
import FlaskTodoImg from "../assets/FlaskTodoImg.png";
import SEO from "./SEO";

const Project = () => {
  const { projectRef } = useContext(AppContext);

  return (
    <div
      ref={projectRef}
      className="text-white flex flex-col items-center justify-center gap-10 lg:gap-20 "
    >
      <SEO
        title="Projects | Mukesh Kumar - Frontend Developer Portfolio"
        description="Explore web development projects by Mukesh Kumar, including agency websites, drum kits, Pokémon games, and Flask apps. Built with HTML, CSS, JavaScript, React, and more."
        keywords="Mukesh Kumar, portfolio, web projects, React projects, frontend developer, JavaScript, HTML, CSS, Flask, GitHub"
      />
      <h2 className="text-4xl font-extrabold text-center tracking-wide py-10 relative top-10">
        Projects
      </h2>

      {/* Project 1: Agency Website */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
        <div className="bg-white p-4 rounded-xl w-full md:w-1/2 max-w-md shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Agency Website
          </h3>
          <img
            src={AgencyDesktopImg}
            alt="Agency Website Screenshot"
            className="w-full h-48 object-contain rounded"
          />
          <div className="mt-5 flex justify-center space-x-3">
            <a
              href="https://mukesh469.github.io/Agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              View
            </a>
            <a
              href="https://github.com/Mukesh469/Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Code
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/2 max-w-xl text-white">
          <h2 className="text-xl sm:text-2xl font-bold">Agency - Landing Page</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 text-justify">
            This is a responsive landing page created for a digital agency. It features a clean UI,
            and a mobile-friendly layout. The goal was to practice frontend
            development using core web technologies.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mt-2">Tools I Used</h3>
          <div className="flex flex-wrap gap-3">
            {['HTML', 'CSS', 'Grid Layout'].map((tool) => (
              <span
                key={tool}
                className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full border border-gray-600"
              >
                #{tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project 2: Drum Kit */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-13 max-w-6xl w-full">
        <div className="flex flex-col gap-4 w-full md:w-1/2 max-w-xl text-white">
          <h2 className="text-xl sm:text-2xl font-bold">Drum Kit</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 text-justify">
            Interactive Drum Kit website for practicing DOM manipulation and event handling.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mt-2">Tools I Used</h3>
          <div className="flex flex-wrap gap-3">
            {['HTML', 'CSS', 'JavaScript'].map((tool) => (
              <span
                key={tool}
                className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full border border-gray-600"
              >
                #{tool}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl w-full md:w-1/2 max-w-md shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Drum Kit Website
          </h3>
          <img
            src={DrumKitImg}
            alt="Drum Kit Screenshot"
            className="w-full h-48 object-contain rounded"
          />
          <div className="mt-5 flex justify-center space-x-3">
            <a
              href="https://mukesh469.github.io/Drum-kit-/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              View
            </a>
            <a
              href="https://github.com/Mukesh469/Drum-kit-"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Code
            </a>
          </div>
        </div>
      </section>

      {/* Project 3: Catch Pokemon */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
        <div className="bg-white p-4 rounded-xl w-full md:w-1/2 max-w-md shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Catch Pokemon
          </h3>
          <img
            src={CatchPokemonImg}
            alt="Catch Pokemon Screenshot"
            className="w-full h-48 object-contain rounded"
          />
          <div className="mt-5 flex justify-center space-x-3">
            <a
              href="https://mukesh469.github.io/catchPokemon/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              View
            </a>
            <a
              href="https://github.com/Mukesh469/catchPokemon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Code
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/2 max-w-xl text-white">
          <h2 className="text-xl sm:text-2xl font-bold">Catch Pokemon</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 text-justify">
            Fun "Catch Pokémon" project focusing on DOM manipulation and event handling.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mt-2">Tools I Used</h3>
          <div className="flex flex-wrap gap-3">
            {['HTML', 'CSS', 'JavaScript'].map((tool) => (
              <span
                key={tool}
                className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full border border-gray-600"
              >
                #{tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project 4: Flask Web App */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
        <div className="flex flex-col gap-4 w-full md:w-1/2 max-w-xl text-white">
          <h2 className="text-xl sm:text-2xl font-bold">Flask Web App</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 text-justify">
            Flask-based To-Do app with user authentication and CRUD operations.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mt-2">Tools I Used</h3>
          <div className="flex flex-wrap gap-3">
            {['Flask', 'MySQL', 'HTML', 'Bootstrap', 'JavaScript'].map((tool) => (
              <span
                key={tool}
                className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full border border-gray-600"
              >
                #{tool}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl w-full md:w-1/2 max-w-md shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Flask Todos
          </h3>
          <img
            src={FlaskTodoImg}
            alt="Flask To-Do App Screenshot"
            className="w-full h-48 object-contain rounded"
          />
          <div className="mt-5 flex justify-center space-x-3">
            <a
              href="https://github.com/me50/Mukesh469.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              View
            </a>
            <a
              href="https://github.com/me50/Mukesh469.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
