import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Homepage from "./components/Home/Homepage";
import Vision from "./components/Vision/Vision";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import AuthOverlay from "./components/AuthOverlay/AuthOverlay";
import Login from "./components/Auth/Login";
import StudentHome from "./components/Student/StudentHome/StudentHome";
import Admin from "./components/Admin/Admin";

const App = () => {
  const [overlayMode, setOverlayMode] = useState(null);

  const toggleOverlay = (mode) => {
    setOverlayMode(mode);
  };

  const closeOverlay = () => {
    setOverlayMode(null);
  };

  return (
    <Router>
      <div>
        {/* Navbar always visible */}
        <Navbar toggleOverlay={toggleOverlay} />

        <Routes>
          {/* Home Page with all sections */}
          <Route
            path="/"
            element={
              <>
                <section id="homepage">
                  <Homepage />
                </section>
                <section id="vision">
                  <Vision />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="testimonials">
                  <Testimonials />
                </section>
                <section id="faq">
                  <FAQ />
                </section>
                <section id="contact-us">
                  <ContactUs />
                </section>
                <Footer />
                {overlayMode && (
                  <AuthOverlay mode={overlayMode} closeOverlay={closeOverlay} />
                )}
              </>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Student Dashboard */}
          <Route path="/student-home" element={<StudentHome />} />

          {/* Admin Dashboard */}
          <Route path="/admin-home" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
