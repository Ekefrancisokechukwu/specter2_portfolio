import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useGlobalContent } from "../context";

const listVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      duration: 1,
      delay: 0.5,
    },
  },
};

const childVarient = {
  hidden: {
    y: 20,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProjectsFilter = () => {
  const [isfilter, setIsfilter] = useState(false);
  const filtercontainer = useRef(null);
  const { category, filt, setCategory } = useGlobalContent();

  useEffect(() => {
    const filterTop = filtercontainer.current.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
      if (window.scrollY >= filterTop) {
        setIsfilter(true);
      } else {
        setIsfilter(false);
      }
    });
  }, [filtercontainer]);

  return (
    <div
      className={`${isfilter ? "project__filter fixed" : "project__filter"}`}
      ref={filtercontainer}
    >
      <div>
        <h1>Filter projects by:</h1>
        <motion.ul
          className="project__filter--list"
          variants={listVariant}
          initial="hidden"
          animate="visible"
        >
          {filt.map((categoryBtn, index) => {
            return (
              <motion.li
                key={index}
                className={`project__filter--item ${
                  category == categoryBtn ? "active" : ""
                }`}
                variants={childVarient}
                onClick={() => setCategory(categoryBtn)}
              >
                {categoryBtn}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default ProjectsFilter;
