import React, { createContext, useState, useRef } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const projectRef = useRef(null);  // Reference to the project section

  // Open & close modal
  const openModel = () => setIsModelOpen(true);
  const closeModel = () => setIsModelOpen(false);

  // Function to scroll to the project section
  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppContext.Provider
      value={{
        isModelOpen,
        openModel,
        closeModel,
        projectRef,
        scrollToProject,  // Add scrollToProject to the context
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
