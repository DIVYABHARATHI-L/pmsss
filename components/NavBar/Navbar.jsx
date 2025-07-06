import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = ({ toggleOverlay }) => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update active tab when clicked
  };


  return (
    <nav className="navbar">
      <div className="logo">
        <h1>PMSSS Portal</h1>
      </div>
      <ul className="nav-links">
        <li>
          <AnchorLink
            href="#homepage"
            className={activeTab === "homepage" ? "active" : ""}
            onClick={() => handleTabClick("homepage")}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#services"
            className={activeTab === "services" ? "active" : ""}
            onClick={() => handleTabClick("services")}
          >
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#testimonials"
            className={activeTab === "testimonials" ? "active" : ""}
            onClick={() => handleTabClick("testimonials")}
          >
            Testimonials
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#faq"
            className={activeTab === "faq" ? "active" : ""}
            onClick={() => handleTabClick("faq")}
          >
            FAQ
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#contact-us"
            className={activeTab === "contact-us" ? "active" : ""}
            onClick={() => handleTabClick("contact-us")}
          >
            Contact
          </AnchorLink>
        </li>
        <li>
          <span
            className={activeTab === "login" ? "active" : ""}
            onClick={() => {
              handleTabClick("login");
              toggleOverlay("login");
            }}
          >
            Login
          </span>
        </li>
        <li>
          <span
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => {
              handleTabClick("signup");
              toggleOverlay("signup");
            }}
          >
            Sign Up
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
