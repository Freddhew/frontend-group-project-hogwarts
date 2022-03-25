import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import Education from "./views/Education.js";
import Apply from "./views/Apply";
import Staff from "./views/Staff";
import Administration from "./views/Administration";
import Login from "./views/Login";

ReactDOM.render(
  //Let us only implement our components here. Functions and logic can be written in separate .fs files
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/education" element={<Education />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);