import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/global/header";
import Footer from "./components/global/footer";
import Start from "./page/start";
import Booking from "./page/booking";
import Aboutus from "./page/aboutus";
import Lessons from "./page/lessons";
import Horses from "./page/horses";
import Prices from "./page/prices";
import Contact from "./page/contact"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/Horses" element={<Horses />} />
        <Route path="/Prices" element={<Prices />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
