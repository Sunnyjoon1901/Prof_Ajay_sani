import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home page";
import Contact from "./contact page";
import Students from "./students page";
import Projects from "./project page";
import Academics from "./Academincs page";
import PopularMedia from "./popular media page";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/students" element={<Students />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/academic" element={<Academics />} />
        <Route path="/popular-media" element={<PopularMedia/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
