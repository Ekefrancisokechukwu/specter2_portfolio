import { motion } from "framer-motion";
// import { toast } from "react-toastify";

const Form = () => {
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  return (
    <motion.form
      action="https://formspree.io/f/mjvqbozr"
      method="POST"
      className="form"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.7,
        type: "spring",
        stiffness: 100,
        bounce: 2,
      }}
    >
      <div className="form__group">
        <label htmlFor="fullname" className="form__label">
          FullName:
        </label>
        <input
          type="name"
          id="fullname"
          name="name"
          className="form__input"
          required
        />
      </div>

      <div className="form__group">
        <label htmlFor="email" className="form__label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form__input"
          required
        />
      </div>

      <div className="form__group">
        <label htmlFor="message" className="form__label textlabel">
          message:
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="form__textarea"
          required
        />
      </div>
      <button type="submit" className="form__btn">
        send
      </button>
    </motion.form>
  );
};

export default Form;
