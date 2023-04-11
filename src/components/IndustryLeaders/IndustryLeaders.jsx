import React from "react";
import i from "../../Assets/images/HOME/Industry-Leaders/profile.png";
import j from "../../Assets/images/HOME/Industry-Leaders/quote.png";
import "./IndustryLeaders.scss";

const IndustryLeaders = () => {
  return (
    <>
      <section className="industry-leaders-wrapper py-5 background-E2F0F6">
        <div className="container-lg">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-12 col-md-3 px-5 pe-md-0">
                    <div className="rounded-3 position-relative">
                      <img src={i} className="img-fluid" alt="profile_image" />
                      <img
                        src={j}
                        alt="quote"
                        className="quote position-absolute"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-4 mt-md-0 ps-md-5 d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="heading fw-bold text-md-start">
                        Industry Leaders Talkies
                      </h2>
                      <h3 className="sub-heading text-md-start mb-3">
                        Bots are like new applications, and digital assistants
                        are meta apps or like a new browsers. And intelligence
                        is infused into all yours interactions. That's the rich
                        platform that we have.
                      </h3>
                      <h6 className="fw-bold text-center text-md-start">
                        Saatiya Nadela
                      </h6>
                      <small className="d-block text-center text-md-start">
                        Micrososft
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-12 col-md-3 px-5 pe-md-0">
                    <div className="rounded-3 position-relative">
                      <img src={i} className="img-fluid" alt="profile_image" />
                      <img
                        src={j}
                        alt="quote"
                        className="quote position-absolute"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-4 mt-md-0 ps-md-5 d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="heading fw-bold text-md-start">
                        Industry Leaders Talkies
                      </h2>
                      <h3 className="sub-heading text-md-start mb-3">
                        Bots are like new applications, and digital assistants
                        are meta apps or like a new browsers. And intelligence
                        is infused into all yours interactions. That's the rich
                        platform that we have.
                      </h3>
                      <h6 className="fw-bold text-center text-md-start">
                        Saatiya Nadela
                      </h6>
                      <small className="d-block text-center text-md-start">
                        Micrososft
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-12 col-md-3 px-5 pe-md-0">
                    <div className="rounded-3 position-relative">
                      <img src={i} className="img-fluid" alt="profile_image" />
                      <img
                        src={j}
                        alt="quote"
                        className="quote position-absolute"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-4 mt-md-0 ps-md-5 d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="heading fw-bold text-md-start">
                        Industry Leaders Talkies
                      </h2>
                      <h3 className="sub-heading text-md-start mb-3">
                        Bots are like new applications, and digital assistants
                        are meta apps or like a new browsers. And intelligence
                        is infused into all yours interactions. That's the rich
                        platform that we have.
                      </h3>
                      <h6 className="fw-bold text-center text-md-start">
                        Saatiya Nadela
                      </h6>
                      <small className="d-block text-center text-md-start">
                        Micrososft
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryLeaders;
