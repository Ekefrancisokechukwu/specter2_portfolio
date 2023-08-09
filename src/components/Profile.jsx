import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import Avater from "../assets/img/port.png";

const Profile = () => {
  const [toggleProf, setToggleProf] = useState(false);

  return (
    <div className={`${toggleProf ? "profile visible" : "profile"}`}>
      <span
        className="profile__toggle"
        onClick={() => setToggleProf(!toggleProf)}
      >
        {toggleProf ? <BiChevronRight /> : <BiChevronLeft />}
      </span>
      <a
        href="mailto:okechukwufrancis929@gmail.com"
        rel="noreferrer"
        target="_blank"
        style={{ color: "white" }}
      >
        <div className="profile__pic">
          <img src={Avater} alt="avater" />
        </div>

        <div className="profile__email">
          <HiOutlineMail />
          <span>okechukwufrancis929@gmail.com</span>
        </div>
      </a>
    </div>
  );
};
export default Profile;
