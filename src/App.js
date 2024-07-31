import React from "react";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { FirstTask } from "./pages/FirstTask";
import { SecondTask } from "./pages/SecondTask";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThirdTask from "./pages/ThirdTask";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/first-task" element={<FirstTask />} />
        <Route path="/second-task" element={<SecondTask />} />
        <Route path="/third-task" element={<ThirdTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
