import React from "react";
import { serviceData } from "../../utils/Data";
import "./Services.scss";

const Services = () => {
  return (
    <>
      <section className="services-wrapper background-E2F0F6 py-5">
        <div className="container py-sm-5">
          <div className="row">
            <div>
              <h2 className="heading text-center mb-4">
                <strong>Services</strong> we provide!
              </h2>
              <h3 className="sub-heading text-center mb-sm-5">
                The Next Generation <strong>Voice</strong> and{" "}
                <strong>Image</strong> Processing Solutions.
              </h3>
            </div>
            {serviceData?.map(({ title, description, icon }, index) => {
              return (
                <div key={index} className="col-12 col-md-6 mt-5">
                  <div className="cards background-white position-relative p-3 p-sm-5">
                    <div className="position-absolute card-icon secondary-gradient-background white">
                      {icon}
                    </div>
                    <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
                      <p className="title text-center mt-5">{title}</p>
                      <p className="sub-title text-center">{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="row justify-content-center pt-5 mt-5">
            <div>
              <h2 className="heading text-center mb-4">
                <strong>Service made easy </strong> for you to understand
              </h2>
            </div>
            {serviceData2?.map(
              ({ image, title, subtitle, description }, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-lg-4 mt-5 px-3"
                  >
                    <div className="bg-white py-5 px-2 rounded-4 shadow-sm">
                      <h4 className="title text-center px-4 fw-bold fs-3 mb-3">
                        {title}
                      </h4>
                      <h5 className="subtitle text-center">{subtitle}</h5>
                      <img
                        src={image}
                        className="img-fluid p-4"
                        alt="service_image"
                      />
                      <h6 className="text-center px-3">{description}</h6>
                      <Link to="/comming-soon">
                        <button className="button white d-block px-4 py-2 mt-5 mx-auto">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }
            )}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Services;
