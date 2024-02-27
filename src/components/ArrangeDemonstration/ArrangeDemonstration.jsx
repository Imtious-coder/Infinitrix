import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Assets/images/HOME/explore_waves.png";
import "./ArrangeDemonstration.scss";

const ArrangeDemonstration = () => {
  return (
    <>
      <section className="arrange-demonstration py-5  base-gradient-background">
        <div className="py-sm-3">
          <h2 className="heading white fw-bold mb-4">
            Want to See The Magic
          </h2>
          <div className="container-lg">
            <div className="row justify-content-center pb-5">
              <div className="col-6">
                <img src={Image} className="img-fluid" alt="waves" />
              </div>
            </div>
          </div>
          <Link to="/coming-soon">
            <button className="button2 white px-5 py-3 d-block mx-auto">
              Let's Talk
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ArrangeDemonstration;
