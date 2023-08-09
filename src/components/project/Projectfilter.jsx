import { useGlobalContent } from "../context";
import { MdOutlineCancel } from "react-icons/md";

const Projectfilter = () => {
  const { category, filt, setCategory, sideFilterOpen, setSideFilterOpen } =
    useGlobalContent();

  return (
    <div
      className={`${sideFilterOpen ? "sidebarFilter active" : "sidebarFilter"}`}
    >
      <h5
        style={{ fontSize: "1.8rem" }}
        onClick={() => setSideFilterOpen(false)}
      >
        <MdOutlineCancel />
      </h5>
      <div style={{ marginTop: "6rem" }}>
        <h1>Filter projects by:</h1>
        <ul className="project__filter--list">
          {filt.map((categoryBtn, index) => {
            return (
              <li
                key={index}
                className={`project__filter--item filterbtn ${
                  category == categoryBtn ? "active" : ""
                }`}
                onClick={() => {
                  setCategory(categoryBtn);
                  setSideFilterOpen(false);
                }}
              >
                {categoryBtn}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Projectfilter;
