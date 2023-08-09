/* eslint-disable react/no-unescaped-entities */

// icon
// import { SlEqualizer } from "react-icons/sl";

import ProjectsFilter from "./ProjectsFilter";
import { motion } from "framer-motion";
import SingleProject from "./SingleProject";
import { useGlobalContent } from "../context";
import { useFetchProjects } from "../../fetchProjects";
import Projectfilter from "./Projectfilter";
import { BsFilterLeft } from "react-icons/bs";

export const variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      delay: 0.3,
      type: "spring",
      stiffness: 25,
    },
  },
};

const ProjectsContent = () => {
  const { project, setSideFilterOpen } = useGlobalContent();
  const { loading, isError } = useFetchProjects();

  if (loading) {
    return (
      <section
        className="project__container"
        style={{
          display: "grid",
          placeItems: "center",
          height: "90vh",
          padding: "5rem",
        }}
      >
        <motion.h1
          initial={{ scale: 1.2 }}
          animate={{ scale: [1, 1.5] }}
          transition={{ repeat: "infinity", duration: 0.5, ease: "backInOut" }}
        >
          Loading...
        </motion.h1>
      </section>
    );
  }

  if (isError) {
    return (
      <section
        className="project__container"
        style={{
          display: "grid",
          placeItems: "center",
          height: "90vh",
          padding: "5rem",
        }}
      >
        <h1> There was an error...</h1>
      </section>
    );
  }

  // console.log(project);
  return (
    <motion.section className="project">
      <Projectfilter />
      <motion.h1
        className="heading-primary u-center "
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        some projects i'have worked on
      </motion.h1>

      <div className="project__container">
        <ProjectsFilter />

        <h1 className="sideFilterBtn" onClick={() => setSideFilterOpen(true)}>
          filter: <BsFilterLeft />
        </h1>

        <motion.div
          className="project__contents"
          transition={{ duration: 0.3, layout: { duration: 0.3 } }}
        >
          {project.map((proj) => {
            return <SingleProject key={proj.id} {...proj} />;
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsContent;
