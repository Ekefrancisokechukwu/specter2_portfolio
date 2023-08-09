/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import avater from "../assets/img/port.png";

const AboutAvater = () => {
  const mydate = new Date(2022);
  const currentYear = new Date().getFullYear();
  let year = currentYear - mydate;

  return (
    <div className="about__avater">
      <p className="about__description">
        "Hello, I'm{" "}
        <span style={{ color: "#29a8b1dd", textTransform: "capitalize" }}>
          francis okechukwu eke
        </span>
        , a passionate and skilled web developer with{" "}
        <span style={{ color: "#29a8b1dd" }}>{year}+</span> years of experience
        in creating engaging and user-friendly websites. I am committed to
        delivering high-quality solutions that exceed client expectations."
        <br />
        <br />
        "I specialize in front-end development, with expertise in HTML5, CSS3,
        and JavaScript. I have hands-on experience with popular frameworks like
        React
        <br />
        <br />I believe in creating seamless user experiences through intuitive
        interfaces and optimized performance. I continuously strive to expand my
        skill set and stay up-to-date with emerging technologies in the
        ever-evolving field of web development. and i also enjoy working as a
        team "
        <br />
        <br />
        "When I'm not coding, I enjoy watching football and playing playstation
      </p>

      <motion.div className="about__avater-img">
        <img src={avater} alt="avater" loading="lazy" />
      </motion.div>
    </div>
  );
};

export default AboutAvater;
