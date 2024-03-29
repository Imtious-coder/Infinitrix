import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGlobeAfrica,
  FaLinkedin,
  FaMediumM,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="main-footer primary-background py-5">
        <div className="container-xxl">
          <div className="row px-md-5">
            <div className="col-12">
              <Link to="/">
                {/* <img
                  src={Logo}
                  className="img-fluid d-block mx-auto mx-md-0"
                  alt="Footer_Logo"
                /> */}
                <h1 className="fw-bold">Infinitrix</h1>
              </Link>
            </div>
            <div className="my-5 line" />
            <div className="col-6 col-md-4 mt-5 mt-md-0">
              <div>
                <h5 className="mb-4">Products</h5>
                <Link to="/">
                  <h6>SynthAI</h6>
                </Link>
                <Link to="/">
                  <h6>NeuroSync</h6>
                </Link>
                <Link to="/">
                  <h6>LingoGenius</h6>
                </Link>
                <Link to="/">
                  <h6>MindScribe</h6>
                </Link>
                <Link to="/">
                  <h6>VitaFat</h6>
                </Link>
                <Link to="/">
                  <h6>QantumCarft</h6>
                </Link>
                <Link to="/">
                  <h6>CryoCraft</h6>
                </Link>
              </div>
            </div>
            <div className="d-none d-md-block col-md-1">
              <div className="line2"></div>
            </div>
            <div className="col-6 col-md-3 mt-5 mt-md-0">
              <div>
                <h5 className="mb-4">Company</h5>
                <Link to="/about">
                  <h6>About US</h6>
                </Link>
                <Link to="/coming-soon">
                  <h6>Leadership</h6>
                </Link>
                <Link to="/career">
                  <h6>Career</h6>
                </Link>
                <Link to="/coming-soon">
                  <h6>Terms & Condition</h6>
                </Link>
                <Link to="/coming-soon">
                  <h6>Privacy Policy</h6>
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-2 mt-5 mt-md-0">
              <div>
                <h5 className="mb-4">Pages</h5>
                <Link to="/">
                  <h6>Home</h6>
                </Link>
                <Link to="/product">
                  <h6>Products</h6>
                </Link>
                <Link to="/career">
                  <h6>Career</h6>
                </Link>
                {/* <Link to="/blog">
                  <h6>Blog</h6>
                </Link> */}
                <Link to="/about">
                  <h6>About Us</h6>
                </Link>
                <Link to="/investor-relation">
                  <h6>Investor Relation</h6>
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-2 mt-5 mt-md-0">
              <div>
                <h5 className="mb-4">Services</h5>
                <Link to="/comming-soon">
                  <h6>Voice Detection</h6>
                </Link>
                <Link to="/comming-soon">
                  <h6>Image Processing</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 line" />
      </footer>
      <footer className="bottom-footer primary-background pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center justify-content-md-start align-items-center">
                {/* <div className="bottomFooterLogo">
                  <Link to="/">
                    <h2>Infinitrix</h2>
                  </Link>
                </div> */}
                <p className="mb-0">
                  &copy; {new Date().getFullYear()} Infinitrix All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4 mt-md-0">
              <div className="d-flex gap-5 justify-content-center justify-content-md-end align-items-center">
                <Link
                  to="https://www.facebook.com/imtious.midul/"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
                <Link to="https://github.com/Imtious-coder" target="_blank">
                  <FaGithub />
                </Link>
                <Link to="https://www.linkedin.com/in/imtious/" target="_blank">
                  <FaLinkedin />
                </Link>
                <Link to="https://medium.com/@imtious.islam.me" target="_blank">
                  <FaMediumM />
                </Link>
                <Link
                  to="https://imtious-portfolio.netlify.app/"
                  target="_blank"
                >
                  <FaGlobeAfrica />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
