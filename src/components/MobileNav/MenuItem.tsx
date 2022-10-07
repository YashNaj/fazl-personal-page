import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { NavLink } from "react-router-dom";
import { MobileNav } from "./MobileNav";
const items = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
export const MenuItem = ({ i }: any) => {

  return (
    <motion.li
      variants={items}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}


    >
      <NavLink to={i} className="icon-placeholder" 
            >
        {i}
      </NavLink>
    </motion.li>
  );
};
export default MenuItem;