import React from "react";
import { Route, Routes } from "react-router-dom";
import Lander from "../Pages/Lander";
import Services from "../Pages/Services";
import Vision from "../Pages/Vision";
import About_Us from "../Pages/AboutUs";
import Login from "../components/Login";
import Register from "../components/Register";
import Portfolio from "../components/Portfolio";
function routes() {
  return (
    <Routes>
      <Route path="/" element={<Lander />} />
      <Route path="/services" element={<Services />} />
      <Route path='/portfolio' element={<Portfolio/>} /> -- will link it to login button action
      <Route path="/vision" element={<Vision />} />
      <Route path="/about-us" element={<About_Us />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path='/get-started' element={<Lander/>} />  -- TBD  */}
    </Routes>
  );
}

export default routes;
