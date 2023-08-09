// icons
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import { SiAboutdotme } from "react-icons/si";

// labaries
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// custom hook
import { useGlobalContent } from "./context";

const nav = {
  hidden: { opacity: 0, y: "100vh" },
  visible: { opacity: 1, y: "-20px", transition: {} },
};

const navData = [
  {
    url: "/",
    tooltip: "Home",
    icon: <AiOutlineHome className="nav__icon" />,
  },
  {
    url: "/projects",
    tooltip: "Projects",
    icon: <AiOutlineFundProjectionScreen className="nav__icon" />,
  },
  {
    url: "/contact",
    tooltip: "Contacts",
    icon: <LuContact className="nav__icon" />,
  },
  {
    url: "/about",
    tooltip: "About me",
    icon: <SiAboutdotme className="nav__icon" />,
  },
];

const Subnav = () => {
  const { isNavOpen, setIsNavOpen } = useGlobalContent();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          className="nav__subnav"
          initial={false}
          variants={nav}
          animate={isNavOpen ? "visible" : "hidden"}
        >
          <ul className="nav__list" onClick={() => setIsNavOpen(false)}>
            {navData.map((link, index) => {
              const { url, icon } = link;

              return (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={url}
                    className={({ isActive }) =>
                      isActive ? "nav__link active" : "nav__link"
                    }
                  >
                    {icon}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </AnimatePresence>
    </>
  );
};

export default Subnav;
