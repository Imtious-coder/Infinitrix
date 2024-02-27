import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/HOME/logo2.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header-wrapper py-1 top-sticky shadow-sm sticky-top">
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
              <div className="navbar-nav ms-auto gap-0 gap-lg-4 ps-sm-3 d-flex align-items-center align-items-sm-start align-items-lg-center">
                <Link to="/" className="nav-link fw-bold" aria-current="page">
                  <FaHome />
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
                          to="comming-soon"
                          className="dropdown-item py-2 border-bottom"
                        >
                          SynthAI
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="dropdown-item py-2 border-bottom"
                        >
                          NeuroSync
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="dropdown-item py-2 border-bottom"
                        >
                          LingoGenius
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="dropdown-item py-2 border-bottom"
                        >
                          MindScribe
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="dropdown-item py-2 border-bottom"
                        >
                          VitaFit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="dropdown-item py-2 border-bottom"
                        >
                          QuantumCraft
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item py-2">
                          CryoCraft
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
                        <Link
                          to="/investor-relation"
                          className="dropdown-item py-2"
                        >
                          Investor Realation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <Link
                  to="/investor-relation"
                  className="nav-link fw-bold"
                  aria-current="page"
                >
                  Investor Realation
                </Link> */}
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
