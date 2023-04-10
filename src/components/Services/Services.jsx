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
                The Next Generation Language Processing & Voice AI Solutions
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
        </div>
      </section>
    </>
  );
};

export default Services;
