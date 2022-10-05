import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import "./Work.css";
import { PortfolioItems } from "../../components";
import { Link } from "react-router-dom";
import LensImage from "../../images/lens.jpg";
import KamiImage from "../../images/kami.jpg";
export const Work = () => {
  const [animate, toggleFocus] = useCycle();
  return (
    <AnimatePresence>
      <motion.div
        className="work-container"
        id="work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="work-content ">
          <Link to="/work/lens">
            <PortfolioItems
              id="lens"
              onToggleFocus={toggleFocus}
              className="lens__portfolio-item"
              title="LENS"
              image={LensImage}
            />
          </Link>
          <Link to="/work/kami">
            <PortfolioItems
              className="kami__portfolio-item"
              onToggleFocus={toggleFocus}
              id="kami"
              header="Kami"
              title="Kami"
              image={KamiImage}
            />
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
