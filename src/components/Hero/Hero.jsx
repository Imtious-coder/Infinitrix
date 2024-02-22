import React from "react";
import HeroImage from "../../Assets/images/HOME/Hero.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper base-gradient-background py-5">
        <div className="container-lg py-md-5">
          <div className="row align-items-center pt-5">
            <div className="col-12 col-md-6 ps-2">
              <div>
                <h1 className="big-heading mb-4 text-center text-sm-start">
                  Revolutionizing Operational Efficiency through AI Innovation
                </h1>
                <h4 className="text-center text-sm-start">
                  Unlocking Customer Understanding and Service Excellence with
                  Cutting-Edge AI-Powered Voice and Language Processing
                  Solutions.
                </h4>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-sm-5 mt-md-0">
              <div className="mx-auto">
                <img className="hero-image" src={HeroImage} alt="Hero_Image" />
                {/* <video className="hero-video" autoPlay muted controls>
                  <source src={Video} type="video/mp4" />
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
