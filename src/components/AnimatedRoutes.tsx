import React from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HomePage, Work, About } from "../containers";
import { Resume } from "./resume/Resume";
import { AnimatePresence } from "framer-motion";
export function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<HomePage />} path="/" />
        <Route element={<Work />} path="/work" />
        <Route element={<About />} path="/about" />
        <Route element={<Resume />} path="/resume" />
      </Routes>
    </AnimatePresence>
  );
}
