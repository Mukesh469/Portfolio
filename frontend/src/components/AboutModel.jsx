import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import MukeshKumarPic from "../assets/MukeshKumarPic.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const AboutModel = () => {
  const { isModelOpen, closeModel } = useContext(AppContext);

  if (!isModelOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 backdrop-blur-md bg-opacity-50 flex items-center  justify-center p-4"
      onClick={closeModel}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-200 rounded-lg p-6 max-w-5xl w-full relative text-black shadow-lg overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={closeModel}
          className="bg-slate-500 text-white py-2 px-4 rounded-full hover:bg-slate-600 absolute right-4 top-4"
        >
          Close
        </button>

        <div className="flex flex-col sm:flex-row items-start gap-8 mt-12">
          {/* Left Column */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl font-bold mb-4 text-start">ABOUT ME</h2>
            <p className="mb-6 text-justify">
              Hi, I’m Mukesh Kumar — a frontend developer who loves building
              clean, creative, and user-friendly websites. I turn ideas into
              smooth, interactive web experiences using modern tools and
              technologies.
            </p>

            <p className="mb-4 text-start font-medium">Technologies and tools I use:</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "#react (vite)","#tailwind", "#bootstrap", "#html", "#css", "#javaScript",
                "#c++", "#git", "#github", "#api-integration", 
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-300 text-black rounded-xl shadow px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="py-4">
              <p className="text-xl font-bold mb-4 text-start">
                <span className="text-green-500">M</span> <span>E</span> <span className="text-blue-500">R</span> <span className="text-green-500">N</span>
              </p>
              <div className="flex gap-6 flex-wrap">
                {[
                  { icon: <DiMongodb size={40} color="green" />, label: "MongoDB", short: "M" },
                  { icon: <SiExpress size={40} color="black" />, label: "Express", short: "E" },
                  { icon: <DiReact size={40}  color="skyblue"/>, label: "React", short: "R" },
                  { icon: <DiNodejs size={40} color="green"/>, label: "Node.js", short: "N" },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="relative group flex flex-col items-center"
                  >
                    {tech.icon}
                    <span className="text-sm">{tech.short}</span>
                    <div className="absolute -bottom-10 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md">
                      {tech.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="lg:w-1/2 w-full flex justify-center items-center ">
            <img
              src={MukeshKumarPic}
              alt="Mukesh Kumar"
              className="w-full h-full max-w-xs object-contain rounded-2xl hidden sm:block "
            />
           {/* <div className="flex ">
             <FaLinkedin size={40}color="skyBlue" /> <FaGithub size={40} />
           </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModel;
