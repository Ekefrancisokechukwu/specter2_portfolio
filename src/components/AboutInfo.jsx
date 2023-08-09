import AboutAvater from "./AboutAvater";
import Skills from "./Skills";
import { variants } from "./project/ProjectsContent";
import { motion } from "framer-motion";

const AboutInfo = () => {
  const { hidden, visible } = variants;

  return (
    <section className="about">
      <motion.h1
        className="heading-primary u-center"
        variants={variants}
        initial={hidden}
        animate={visible}
      >
        about me
      </motion.h1>

      <div className="about__info">
        <AboutAvater />
        <Skills />
      </div>
    </section>
  );
};

export default AboutInfo;
