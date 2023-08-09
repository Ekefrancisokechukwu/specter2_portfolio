import { useEffect, useState } from "react";
import { useGlobalContent } from "./context";
import Hamburger from "hamburger-react";
import { IoMdNotifications } from "react-icons/io";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const variants = {
  hidden: { opacity: 0, scale: 0.3, visibility: "hidden", x: 20 },
  visible: {
    opacity: 1,
    visibility: "visible",
    scale: 1,
    x: 0,
    transition: { duration: 0.1, delay: 0.1 },
  },
};

export const Header = () => {
  const [notify, setNotify] = useState(false);
  const { isNavOpen, setIsNavOpen } = useGlobalContent();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNotify(false);
    });
  }, [notify]);

  return (
    <header className="header">
      <div className="header__logo">Specter</div>

      <Navbar />

      <div className="header__site">
        <IoMdNotifications
          className="notify-icon"
          onClick={() => setNotify(!notify)}
        />

        <motion.div
          variants={variants}
          initial={false}
          animate={notify ? "visible" : "hidden"}
          className="notify"
        >
          <h4>This Site Was Made with</h4>
          <ul>
            <li>Html</li>
            <li>Sass / Css</li>
            <li>React.js</li>
          </ul>
          <h5>by Specter</h5>
        </motion.div>
      </div>

      <div className="header__toggle-btn">
        <Hamburger
          rounded
          color="#ffffff4b"
          size={25}
          toggled={isNavOpen}
          toggle={setIsNavOpen}
        ></Hamburger>
      </div>
    </header>
  );
};
