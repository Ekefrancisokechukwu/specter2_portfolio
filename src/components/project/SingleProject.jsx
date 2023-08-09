import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiOutlineEye, AiFillGithub } from "react-icons/ai";

const SingleProject = ({ img, url, sourceCode, name, stacks }) => {
  return (
    <motion.article className="project__item">
      <div className="project__item--img">
        <LazyLoadImage src={img} alt={name} effect="blur" className="img" />
        {/* <img src={img} alt={name} /> */}
        <div className="project__item--overlay">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="project__item--link"
          >
            Live Site <AiOutlineEye />
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noreferrer"
            className="project__item--link"
          >
            Source Code <AiFillGithub />
          </a>
        </div>
      </div>
      <h5 className="project__item--title">{name}</h5>

      <ul className="project__item--lang">
        {stacks.map((stack, index) => {
          return <li key={index}>{stack}</li>;
        })}
      </ul>
    </motion.article>
  );
};

export default SingleProject;
