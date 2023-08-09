import { IoLogoSass } from "react-icons/io";
import { ImCss3 } from "react-icons/im";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandReact } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skill">
      <h2 className="skill__h2">my skills</h2>

      <ul>
        <li>
          <span>html</span>
          <FaHtml5 className="skill__icon" />
        </li>

        <li>
          <span>css</span>
          <ImCss3 className="skill__icon" />
        </li>
        <li>
          <span>sass</span>
          <IoLogoSass className="skill__icon" />
        </li>
        <li>
          <span>tailwind</span>
          <SiTailwindcss className="skill__icon" />
        </li>
        <li>
          <span>javascript</span>
          <DiJavascript1 className="skill__icon" />
        </li>
        <li>
          <span>react</span>
          <TbBrandReact className="skill__icon" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
