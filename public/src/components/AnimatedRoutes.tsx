import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { HomePage, About, Work } from "../containers";
import { Resume } from "../components";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exactly element={<HomePage />} path="/" />
        <Route exactly element={<Work />} path="/work" />
        <Route exactly element={<About />} path="/about" />
        <Route exactly element={<Resume />} path="/resume" />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
