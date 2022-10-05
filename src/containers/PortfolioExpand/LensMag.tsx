import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./LensMag.css";
import "react-multi-carousel/lib/styles.css";

export const LensMag = () => {
  return (
    <AnimatePresence>
      <motion.div className="fazl__portfolio-item-expanded-lens">
        <motion.div className="img-header-lens" />
        <motion.div className="expanded-content-lens">
          <h1>LENS Magazine</h1>
          <p>
            LENS was a creative magazine that was used as a platform to express
            how fashion, art, photography intersected to create a unique design.
            Indesign was used to format and size the magazine properly for the
            printing process. Lightroom was used for the raw image files,
            whereas photoshop was used for creative editing such as filters and
            page placement when there was writing to be added to a page as well.
            We used Illustrator to create the Vector graphics such as the logo.
          </p>
        </motion.div>
        <motion.div className="more-thumbnails"></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
