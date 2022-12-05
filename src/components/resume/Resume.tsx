import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./Resume.css";
export const Resume = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="resume-container content"
        id="resume"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        <motion.div className="resume">
          <motion.a
            className="resume-button"
            rel="noopener noreferrer"
            href="../../images/Resume.pdf"
            title="Fazl__Resume"
            target="_blank"
            download="../../images/Resume.pdf"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <motion.img
              alt="fazl-resume"
              className="resume-img"
              src="https://i.ibb.co/fHt5Q4c/Resume.jpg"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
            />
          </motion.a>
          <motion.h1 className="resume-heading">
            Click or Tap to Download
          </motion.h1>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
