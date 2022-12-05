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
        <motion.div className="work-content" initial={{ y: -200, scale : .8 }}
          animate={{ y: 0, scale: 1}}
        transition= {{ease: "easeOut" , duration: .5}}>
          <Link to="/work/lens">
            <PortfolioItems
              id="lens"
              onToggleFocus={toggleFocus}
              className="lens__portfolio-item"
              title="LENS"
              image={LensImage}
            />
          </Link>
          <motion.div initial={{ x: 0, y: -10 }}
            animate={{ x: 0, y: 0 }}
          exit = {{x:0, y : -10}}> 
          
          </motion.div>
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
