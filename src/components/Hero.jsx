import { Link } from "react-router-dom";
import heroImge from "../assets/img/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="carr"> frontend</h1>

      <div className="hero__info">
        <h1 className="hero__name">
          Hi, my name <br /> is Francis
        </h1>

        <p className="hero__desc">
          I enjoy building beautiful User experience <span>Web Apps</span>
        </p>

        <div className="hero__links">
          <Link className="hero__btn" to="/contact">
            get in touch
          </Link>

          <a
            href="https://docs.google.com/document/d/1ToGtfZuUtWig5ViSMCxjsDi86tdfLxJzGx24gcH3o4s/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hero__btn"
          >
            Resume
          </a>
        </div>
      </div>

      <motion.div
        className="hero__avaterbox"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero__avater">
          <img src={heroImge} alt="" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
