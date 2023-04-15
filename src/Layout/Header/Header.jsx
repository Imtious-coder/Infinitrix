import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/HOME/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header-wrapper py-3 top-sticky shadow-sm sticky-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container-xxl d-flex justify-content-between align-items-center">
            {/* logo */}
            <Link to="/">
              <img src={Logo} className="navbar-brand" alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* navigations */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto gap-0 gap-lg-3 ps-sm-3 d-flex align-items-center align-items-sm-start align-items-lg-center">
                <Link to="/" className="nav-link fw-bold" aria-current="page">
                  Home
                </Link>
                <div className="nav-link" aria-current="page">
                  <div className="dropdown">
                    <p
                      className="dropdown-toggle mb-0 fw-bold"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                    </p>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/product"
                          className="dropdown-item py-2 border-bottom"
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://sensevoice.intelsense.ai/"
                          className="dropdown-item py-2 border-bottom"
                        >
                          Sensevoice
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="dropdown-item py-2 border-bottom"
                        >
                          Sensebots
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="dropdown-item py-2 border-bottom"
                        >
                          HIA
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="dropdown-item py-2 border-bottom"
                        >
                          Airvoice
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item py-2">
                          InsideSense
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav-link" aria-current="page">
                  <div className="dropdown">
                    <p
                      className="dropdown-toggle mb-0 fw-bold"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Company
                    </p>
                    <ul className="dropdown-menu p-0 py-2">
                      <li>
                        <Link
                          to="/about"
                          className="dropdown-item py-2 border-bottom"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/leadership" className="dropdown-item py-2">
                          Leadership
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  to="/investor-relation"
                  className="nav-link fw-bold"
                  aria-current="page"
                >
                  Investor Realation
                </Link>
                <Link
                  to="/blog"
                  className="nav-link fw-bold"
                  aria-current="page"
                >
                  Blogs
                </Link>
                <Link
                  to="/contact"
                  className="nav-link fw-bold"
                  aria-current="page"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
