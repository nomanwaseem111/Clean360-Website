import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./components/Pages";
import Features from "./components/Features";
import Shop from "./components/Shop";
import Elements from "./components/Elements";
import Blogs from "./components/Blogs";
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

            <Route path="/pages" element={<Pages />} />
            <Route path="/features" element={<Features />} />

            <Route path="/shop" element={<Shop />} />

            <Route path="/blogs" element={<Blogs />} />

            <Route path="/elements" element={<Elements />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
