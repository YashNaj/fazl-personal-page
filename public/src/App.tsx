import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import AnimtaedRoutes from "./components/AnimatedRoutes";
import {motion } from "framer-motion"

function App() {
  return (
    <motion.div className="App">
      <motion.div className="background"/>
      <Router>
        <div>
          <NavBar />
          <AnimtaedRoutes />
        </div>
      </Router>
    </motion.div>
  );
}

export default App;
