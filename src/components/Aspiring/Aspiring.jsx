import React from "react";
import Image from "../../Assets/images/HOME/aspiringLeaders2.png";
import "./Aspiring.scss";

const Aspiring = () => {
  return (
    <>
      <section className="aspiring-wrapper position-relative">
        <img src={Image} className="img-fluid" alt="aspiringLeaders" />
        <div className="info position-absolute px-sm-5">
          <div className="px-md-5">
            <h2 className="heading white px-sm-5">
              Pioneering Image AI for Global Accessibility. Bridging the Gap for
              the Next Billion Users 🗺️
            </h2>
            {/* <h3 className="sub-heading white px-sm-5">
              “Empowering the next billion users to access Technology In the
              language and mode of their choice”.
            </h3> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Aspiring;
