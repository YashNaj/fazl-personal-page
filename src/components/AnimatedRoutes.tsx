import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, Work, About, LensMag, Kami } from "../containers";
import { Resume } from "./resume/Resume";
import { AnimatePresence, motion } from "framer-motion";
export function AnimatedRoutes() {
  const location = useLocation();
  return (
    <motion.div className="content">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route element={<HomePage />} path="/" />
          <Route element={<Work />} path="/work" />
          <Route element={<About />} path="/about" />
          <Route element={<Resume />} path="/resume" />
          <Route element={<LensMag />} path="/work/lens" />
          <Route element={<Kami />} path="/work/kami" />
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
}
