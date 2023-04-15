import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta/Meta";
import { blogData } from "../../utils/Data";
import "./Blog.scss";

import { MdKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <section className="blog-wrapper">
        <div className="hero background-1E1F2E py-5">
          <div className="container-lg py-5 my-sm-5">
            <h2 className="heading fw-bold white fs-2 mb-0">THE</h2>
            <h2 className="heading white fs-2 mb-0">INTELSENSE</h2>
            <h1 className="blog-heading white py-3">BLOG</h1>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-sm-3">
              <Link to="/comming-soon" className="white mx-2 base-hvr-color">
                EVERYTHING AI
              </Link>
              <Link to="/comming-soon" className="white mx-2 base-hvr-color">
                PODCAST
              </Link>
              <Link to="/comming-soon" className="white mx-2 base-hvr-color">
                RESEARCH
              </Link>
              <Link to="/comming-soon" className="white mx-2 base-hvr-color">
                NEWS
              </Link>
            </div>
          </div>
        </div>
        <div className="blogs py-4 py-sm-5">
          <div className="container-lg">
            <h2 className="heading base-color fw-bold pb-sm-5">Featured</h2>
            <div className="row justify-content-center px-3">
              {blogData?.map(({ id, image, title, subtitle }, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-sm-6 col-md-4 blog-card mb-4 py-5 px-3 position-relative hvr-box-shadow-outset"
                  >
                    <div className="cardNumber position-absolute">
                      <p>{id}</p>
                    </div>
                    <div className="cards">
                      <div className="logo py-4">
                        <img
                          src={image}
                          className="img-fluid"
                          alt="blog_image"
                        />
                      </div>
                      <div className="cardDetails">
                        <h2>{title}</h2>
                        <h5 className="pt-3">{subtitle}</h5>
                      </div>
                      <Link to="/comming-soon">
                        <button className="button2 white">
                          Read more <MdKeyboardArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
