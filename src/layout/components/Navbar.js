import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar_style.css";

const Navbar = () => {
  const location = useLocation();
  // Function to determine if a link should be active
  const isActiveLink = (pathname) => {
    // Check if the current location matches the link's path
    return location.pathname === pathname;
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          CRUD LARAVEL REACT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-pills ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActiveLink("/home") ? "active" : ""}`}
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActiveLink("/about-us") ? "active" : ""
                }`}
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActiveLink("/contact-us") ? "active" : ""
                }`}
                to="/contact-us"
              >
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActiveLink("/students") ? "active" : ""
                }`}
                to="/students"
              >
                Students
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
