import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SecondTask } from "./pages/SecondTask";
import Navbar from "./components/Navbar/Navbar";
import { FirstTask } from "./pages/FirstTask";
import ThirdTask from "./pages/ThirdTask";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first-task" element={<FirstTask />} />
        <Route path="/second-task" element={<SecondTask />} />
        <Route path="/third-task" element={<ThirdTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
