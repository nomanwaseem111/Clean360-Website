import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import './index.css'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            {/* <Route path="/whyus" element={<WhyUs />} />
            <Route path="/services" element={<Services />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} /> */}

          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
