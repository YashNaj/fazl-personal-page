import { isVisible } from "@testing-library/user-event/dist/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./Resume.css";
const Resume = () => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="resume-container"
          id="resume"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          <div className="resume">
            <a
              href="https://turquoise-marlyn-82.tiiny.site/"
              title="Fazl__Resume"
              target='_blank'
            >
              <img
                className="resume-img"
                src="https://i.postimg.cc/kgwD8M9z/Resume-copy.png"
              />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Resume;
