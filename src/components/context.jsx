/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
// import projects from "./project/projectsData";

import { useFetchProjects } from "../fetchProjects";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { projects, loading } = useFetchProjects();
  const [project, setProject] = useState([]);
  const [category, setCategory] = useState("all");
  const [sideFilterOpen, setSideFilterOpen] = useState(false);

  const filterBtn = projects.map((btn) => btn.category);
  const filt = ["all", ...new Set(filterBtn)];

  useEffect(() => {
    if (category === "all") {
      setProject(projects);
    } else {
      const newProj = projects.filter((item) => item.category === category);
      // console.log(newProj);
      setProject(newProj);
    }
  }, [category, projects]);

  return (
    <AppContext.Provider
      value={{
        isNavOpen,
        setIsNavOpen,
        project,
        category,
        setCategory,
        filt,
        loading,
        sideFilterOpen,
        setSideFilterOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContent = () => {
  return useContext(AppContext);
};
