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
          <div className="resume">
            <a 
              rel ="noopener noreferrer"
              href="https://turquoise-marlyn-82.tiiny.site/"
              title="Fazl__Resume"
              target='_blank'
            >
              <img alt = "fazl-resume"
                className="resume-img"
                src="https://i.postimg.cc/kgwD8M9z/Resume-copy.png"
              />
            </a>
          </div>
        </motion.div>
    </AnimatePresence>
  );
};

