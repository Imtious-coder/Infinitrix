import React from "react";
import { Link } from "react-router-dom";
import { productData } from "../../utils/Data";
import "./Products.scss";

const Products = () => {
  return (
    <>
      <section className="product-wrapper background-E2F0F6 py-5">
        <div className="container py-sm-5">
          <div className="row">
            <div>
              <h2 className="heading text-center mb-4">
                <strong>Products</strong> we are proud of!
              </h2>
              <h3 className="sub-heading text-center mb-sm-5">
                The Ultimate <strong>Image</strong> & <strong>Voice</strong>{" "}
                Products Into The Market.
              </h3>
            </div>
            <div className="col-12 px-2">
              <div className="cards background-white position-relative px-sm-5">
                <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
                  {/* <img
                    style={{ width: `${50}px`, height: `${60}px` }}
                    // src={logo}
                    className="img-fluid mb-2"
                    alt="product_logo"
                  /> */}
                  <p className="title text-center pb-2">SynthAI</p>
                  <p className="sub-title text-center pb-2">
                    Empower your creative journey with SynthAI's innovative
                    AI-driven music composition tools.
                  </p>
                  <Link to={"/product/" + 1}>
                    <button className="button2 white px-5 py-3 mb-2">
                      Try Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {productData?.map(
              ({ id, title, subtitle, description, height, width }, index) => {
                return (
                  <div key={index} className="col-12 col-md-4 mt-3 px-2">
                    <div className="cards background-white position-relative px-sm-5">
                      <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
                        {/* <img
                          style={{ width: `${width}px`, height: `${height}px` }}
                          src={logo}
                          className="img-fluid mb-5"
                          alt="product_logo"
                        /> */}
                        <p className="title text-center pb-2">{title}</p>
                        <p className="sub-title text-center pb-2">{subtitle}</p>
                        {/* <p className="description text-center pb-2">{description}</p> */}
                        <Link to={"/product/" + id}>
                          <button className="button2 white px-5 py-2 mb-2">
                            Try Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
