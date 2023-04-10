import React from "react";
import Video from "../../Assets/video/intro.mp4";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper base-gradient-background py-5">
        <div className="container-lg py-md-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 ps-2">
              <div>
                <h1 className="mb-4 text-center text-sm-start">
                  Advancing the Effectiveness of Businesses
                </h1>
                <h4 className="text-center text-sm-start">
                  AI-Powered Voice Processing, & Language Processing enabling
                  companies to know customers better and provide the best
                  possible services to them.
                </h4>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-sm-5 mt-md-0">
              <div className="mx-auto">
                <video className="hero-video" autoPlay muted controls>
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
