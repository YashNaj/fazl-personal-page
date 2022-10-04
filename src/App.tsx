import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {NavBar , AnimatedRoutes} from "./components"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <AnimatedRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
