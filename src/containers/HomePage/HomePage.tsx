import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./Homepage.css";
export const HomePage = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div id="home" className="fazl-home-container page-setting">
          <div className="fazl-home margin-content">
            <h1 className="fazl-heading">Hi, I'm Fazl!</h1>
            <div className="home-paragraph">
              A multidisciplinary designer who has graduated near the top of his
              class from University of California, San Diego. Exploring the
              intricacies of design through a user-based mindset in all facets.
            </div>
            <div className="learn-more"></div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};