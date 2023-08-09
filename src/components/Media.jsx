import { BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

import { motion } from "framer-motion";

export const socials = [
  {
    url: "https://api.whatsapp.com/message/UT7SN2373O3NL1",
    icon: <BsWhatsapp />,
  },
  {
    url: "https://twitter.com/Francis64995273",
    icon: <FiTwitter />,
  },
  {
    url: "https://www.linkedin.com/in/francis-okechukwu-954632261/",
    icon: <AiOutlineLinkedin />,
  },
  {
    url: "https://github.com/Ekefrancisokechukwu",
    icon: <AiOutlineGithub />,
  },
];

const Media = () => {
  return (
    <div className="media">
      <ul className="media__list">
        {socials.map((link, index) => {
          const { url, icon } = link;
          return (
            <motion.li
              key={index}
              className="media__item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                // duration: 0.3,
                delay: index + 0.03,
                type: "spring",
                stiffness: 120,
              }}
            >
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="media__link"
              >
                {icon}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Media;
