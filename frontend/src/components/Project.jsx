import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { projects } from "./data/projectsData";
import SEO from "./SEO";

const Project = () => {
  const { projectRef } = useContext(AppContext);
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <div
      ref={projectRef}
      className="text-white flex flex-col items-center justify-center gap-20"
    >
      <SEO
        title="Projects | Mukesh Kumar - Frontend Developer Portfolio"
        description="Explore real-world frontend and full-stack projects including a multi-vendor ecommerce platform with Razorpay and Shiprocket integration."
      />

      <h2 className="text-4xl font-extrabold text-center py-10">
        Projects
      </h2>

      {projects.slice(0, visibleCount).map((project) => (
        <section
          key={project.id}
          className={`flex flex-col ${project.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-center gap-10 max-w-6xl w-full`}
        >
          {/* Image Card */}
          <div className="bg-white p-4 rounded-xl w-full md:w-1/2 max-w-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {project.shortTitle}
            </h3>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain rounded "
            />

            <div className="mt-5 flex justify-center space-x-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                View
              </a>

              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                Code
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold">
              {project.title}
            </h2>

            <p className="text-gray-400 text-justify">
              {project.description}
            </p>

            <h3 className="text-lg font-semibold mt-2">
              Tools I Used
            </h3>

            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-600"
                >
                  #{tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}

      {visibleCount < projects.length && (
        <button
          onClick={() => setVisibleCount(projects.length)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Show More Projects
        </button>
      )}

      {visibleCount === projects.length && projects.length > 3 && (
        <button
          onClick={() => setVisibleCount(3)}
          className=" px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition"
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default Project;
