import React from "react";
import { Route, Routes } from "react-router-dom";
import Lander from "../Pages/Lander";
import Services from "../Pages/Services";
import Vision from "../Pages/Vision";
import About_Us from "../Pages/AboutUs";
import Portfolio from "../components/Portfolio";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignupPage";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Lander />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/about-us" element={<About_Us />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default routes;
