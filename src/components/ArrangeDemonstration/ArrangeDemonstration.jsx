import React from "react";
import { Link } from "react-router-dom";
import "./ArrangeDemonstration.scss";

const ArrangeDemonstration = () => {
  return (
    <>
      <section className="arrange-demonstration py-5 secondary-gradient-background2">
        <div className="py-sm-3">
          <h2 className="heading white fw-bold mb-4">
            Arrange a demonstration
          </h2>
          <h3 className="sub-heading white pt-3 pb-4">
            Are you interested to know how our awesome technologies work?
          </h3>
          <Link to="/coming-soon">
            <button className="button white px-5 py-3 d-block mx-auto">
              Let's Talk
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ArrangeDemonstration;
