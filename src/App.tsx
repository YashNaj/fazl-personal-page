import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {NavBar , AnimatedRoutes, Footer} from "./components"
import { motion } from "framer-motion";
function App() {
  return (
    <motion.div>
      <motion.div className="background" />
      <Router>
        <motion.div className = "App">
          <NavBar />
          <AnimatedRoutes />
          <Footer />
        </motion.div>
      </Router>
    </motion.div>
  );
}

export default App;
