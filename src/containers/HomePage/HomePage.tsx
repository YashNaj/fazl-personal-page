import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./Homepage.css";
export const HomePage = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="home content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1, staggerChildren: 0.08 }}
      >
        <motion.div className="fazl-home-container page-setting">
          <motion.div className="fazl-home margin-content "
          transition={{staggerChilren: 0.08}}>
            <motion.h1 className="fazl-heading"
              initial={{ y: -100, opacity : 0  }}
              animate={{ y: 0, opacity: 1 }}
            transition=  {{duration: .5, ease: "easeIn"}}>Hi, I'm Fazl!</motion.h1>
            <motion.div className="home-paragraph"
              initial={{ opacity: 0 }}
            animate = {{opacity: 1}}>
              <motion.p>
              A multidisciplinary designer who has graduated near the top of his
              class from University of California, San Diego.
              </motion.p>
              <motion.p>
              Exploring the
              intricacies of design through a user-based mindset in all facets.
              </motion.p>
            </motion.div>
            <motion.div className="learn-more"></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};