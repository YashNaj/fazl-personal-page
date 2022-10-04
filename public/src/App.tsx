import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import AnimtaedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <AnimtaedRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
