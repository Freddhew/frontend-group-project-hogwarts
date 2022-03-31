import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import App from "./App";

import Education from "./views/Education.js";
import Apply from "./views/Apply";
import Courses from "./views/Courses";
import Staff from "./views/Staff";
import Login from "./views/Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/education" element={<Education />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
