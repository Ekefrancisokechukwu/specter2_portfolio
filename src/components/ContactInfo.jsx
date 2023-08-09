import Form from "./Form";
import Profile from "./Profile";

import { variants } from "./project/ProjectsContent";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

const ContactInfo = () => {
  const { hidden, visible } = variants;

  return (
    <section className="contact">
      <Profile />
      <motion.h1
        className="heading-primary u-center"
        variants={variants}
        initial={hidden}
        animate={visible}
      >
        get in touch
      </motion.h1>

      <div className="contact__content">
        <Form />
      </div>

      <ToastContainer
        position="top-center"
        theme="dark"
        hideProgressBar={true}
      />
    </section>
  );
};

export default ContactInfo;
