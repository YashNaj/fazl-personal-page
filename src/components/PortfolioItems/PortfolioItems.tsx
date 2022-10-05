import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useCycle,
  Variants,
} from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PortfolioItems.css";

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const variants: Variants = {
  expanded: {
    width: '100vw', height: '33vh'
  },
}
export const PortfolioItems = ({ image, header, description, title }: any) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      <motion.div
        className="fazl__portfolio-item-container"
        layout
        onClick={() => setExpanded(!expanded)}
      >
        <motion.div className="fazl__portfoloio-item-image-container" layout>
          <motion.img
            layout
            alt="Faz Portfolio Item"
            className="fazl__portfolio-item-image"
            src={image}
            whileHover={{ scale: 1.1 }}
            transition={transition}
            variants={{variants}}
            animate={expanded ? 'expanded': 'closed' }
            />
            
          </motion.div>
        <motion.div className="fazl__portfolio-item-header" layout>
          {expanded ? <motion.p
          layout>{header}</motion.p> : null}
        </motion.div>
        <motion.div className="fazl__portfolio-item-description" layout>
          {expanded ? description : null}
        </motion.div>
        <motion.div className="fazl__portfolio-item-title" layout>
          <motion.h1
          layout>{title}</motion.h1>
        </motion.div>
      </motion.div>
    </AnimateSharedLayout>
  );
};
