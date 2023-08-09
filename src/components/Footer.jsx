import { socials } from "./Media";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        Frontend Developer <span>&copy; Francis</span>{" "}
        <h3>{new Date().getFullYear()}</h3>{" "}
      </div>

      <ul
        className="footer-media"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {socials.map((social, index) => {
          return (
            <li
              key={index}
              style={{
                background: "#2a2727",
                padding: ".2rem .6rem",
                borderRadius: "5px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#f1f1f1", fontSize: "1.3rem" }}
              >
                {social.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
