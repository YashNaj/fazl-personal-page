import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { MobileNav } from "../MobileNav/MobileNav";
import { AnimateSharedLayout, motion } from "framer-motion";

const menuItems = ["Work", "About", "Resume"];

const MenuItem = ({ text, selected, onClick }: any) => (
  <motion.div className = 'Nav__link'
    onClick={onClick}
    animate={{ opacity: selected ? 1 : 0.5 }}
  >
    <NavLink className = "Nav__link" to={text}>{text}</NavLink>
    {selected && <motion.div className="underline Nav__link" layoutId="underline" />}
  </motion.div>
);

export const NavBar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <NavLink to="/" className="Nav__fazl">
          Fazl Mojadeddi
        </NavLink>
        <div className="Nav__right">
            {menuItems.map((el, i) => (
              <MenuItem
                text={el}
                key={i}
                selected={selected === i}
                onClick={() => setSelected(i)}
              />
            ))}
        </div>
        <div className="Nav__container-mobile">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};
