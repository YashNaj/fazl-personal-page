import * as React from "react";
import { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { NavLink } from "react-router-dom";
import { MenuToggle } from "./MenuToggle";
import "../NavBar/Navbar.css";
import Navigation from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 10px 10px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      style: "-webkit-backdrop-filter:blur(300px)",
    },
  }),
  closed: {
    clipPath: "circle(0px at -10px -10px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.div
      className="mobile-nav"
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <motion.div
        style={{ display: isOpen ? "block" : "none" }}
        onClick={() => toggleOpen()}

      >
        <Navigation />
      </motion.div>

      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};
