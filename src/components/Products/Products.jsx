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
                The Next Generation Language Processing & Voice AI Solutions
              </h3>
            </div>
            {productData?.map(({ id, subtitle, logo }, index) => {
              return (
                <div key={index} className="col-12 col-md-6 mt-5">
                  <div className="cards background-white position-relative px-sm-5">
                    <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={logo}
                        className="img-fluid logo mb-5"
                        alt="product_logo"
                      />
                      <p className="sub-title text-center pb-4">{subtitle}</p>
                      <Link to={"/product/" + id}>
                        <button className="button white px-3 py-2 mb-5">
                          Try Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
