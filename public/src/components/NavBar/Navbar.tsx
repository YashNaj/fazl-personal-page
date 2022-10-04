import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { MobileNav } from "../MobileNav/MobileNav";

const NavBar = () => {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <NavLink to="/" className="Nav__fazl">
          Fazl Mojadeddi
        </NavLink>
        <div className="Nav__right">
          <ul className="Nav__item-wrapper">
            <li className="Nav__item">
              <NavLink className="Nav__link" to="/work">
                Work
              </NavLink>
            </li>
            <li className="Nav__item">
              <NavLink className="Nav__link" to="/about">
                About
              </NavLink>
            </li>
            <li className="Nav__item">
              <NavLink className="Nav__link" to="/resume">
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
        <MobileNav/>
      </div>
    </nav>
  );
};
export default NavBar;
