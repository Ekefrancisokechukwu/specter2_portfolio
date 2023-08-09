import { AnimatePresence, motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="transition"
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        />
      </AnimatePresence>

      <motion.div
        className="transition transition__sub"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
