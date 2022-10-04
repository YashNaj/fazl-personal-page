import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Work.css";
const Work = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="work-container"
        id="work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="work-content "></div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Work;
