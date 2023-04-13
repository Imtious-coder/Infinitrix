import React from "react";
import InfoImage1 from "../../Assets/images/ABOUT/info-image-1.svg";
import InfoImage from "../../Assets/images/ABOUT/info-image.svg";
import HeroImage from "../../Assets/images/ABOUT/left-hero-img.svg";
import HistoryImage from "../../Assets/images/ABOUT/team_intelsense_ai_.jpg";
import WorkImage from "../../Assets/images/ABOUT/work.webp";
import "./About.scss";

const About = () => {
  return (
    <>
      <section className="about-wrapper">
        {/* HERO SECTION */}
        <section>
          <div className="row">
            <div className="hero-left col-12 col-md-6 d-flex align-items-center">
              <h2 className="heading text-sm-start fw-bold white px-4 py-5 py-md-0 mb-0">
                Widening the boundary of Imagination Creating the outline of the
                future.
              </h2>
            </div>
            <div className="col-12 col-md-6 background-1E1F2E white px-4 py-4">
              <div className="hero-right">
                <h2 className="heading mb-0">WHO WE ARE</h2>
                <img
                  src={HeroImage}
                  alt="logo"
                  className="d-block mx-auto my-5"
                />
                <p className="fw-bold text-center text-sm-start">
                  Inflection is an AI-first company, redefining human-computer
                  interaction, co-founded by all founders and directors.
                </p>
                <p className="fw-bold text-center text-sm-start">
                  Throughout the history of computing, humans have had to learn
                  to speak the language of machines. In the new paradigm,
                  machines will understand our language.
                </p>
                <p className="fw-bold text-center text-sm-start">
                  Recent advances in artificial intelligence promise to
                  fundamentally redefine human-machine interaction. We will soon
                  have the ability to relay our thoughts and ideas to computers
                  using the same natural, conversational language we use to
                  communicate with people. Over time, these new language
                  capabilities will revolutionize what it means to have a
                  digital experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* INFO SECTION */}
        <section className="info-wrapper-sention-1 white py-sm-5">
          <div className="container-lg pt-5">
            <div className="row">
              <div className="col-12 col-sm-6 pe-sm-5">
                <h3 className="sub-heading base-color fw-bold fs-3 text-sm-start mb-3 pb-2 mb-sm-0">
                  OUR STORY
                </h3>
                <p>
                  Intelsense AI building a world class team of AI Researchers,
                  Data Scientists, Machine Learning Engineers, Software
                  Engineers, Product Managers, and Visionaries to help realize
                  this potential, pushing the boundaries of what AI can do, and
                  advancing the state of the art in AI.
                </p>
              </div>
              <div className="col-12 col-sm-6 ps-sm-5 mt-5">
                <img
                  src={InfoImage}
                  alt="info_Image"
                  className="d-block mx-auto me-sm-0 mb-3"
                />
                <h3 className="sub-heading base-color fw-bold fs-5 text-sm-end mb-3 pb-1 mb-sm-0">
                  WHAT WE DO
                </h3>
                <p>
                  Intelsense.ai provides AI services, solutions, and products to
                  help organizations across different industries to implement AI
                  today. Our AI research and development facilities in
                  Bangladesh, US and Canada allow us to solve today’s complex
                  problems, customize real-life AI applications for positive
                  future impact, and drive future innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="info-wrapper-sention-2 white py-5">
          <div className="container-lg">
            <div className="row">
              <div className="col-12 col-sm-6 pe-sm-5">
                <h3 className="sub-heading base-color fw-bold fs-3 text-sm-start mb-3 pb-2 mb-sm-0">
                  OUR PURPOSE
                </h3>
                <p>
                  We're optimistic for a future where people live healthier,
                  more informed, more creative lives. We see a world where
                  technology enhances human potential, and progress that
                  everyone can benefit from. We let innovators create the next
                  breakthroughs in machine intelligence.
                </p>
              </div>
              <div className="col-12 col-sm-6 ps-sm-5 mt-5">
                <img
                  src={InfoImage}
                  alt="info_Image"
                  className="d-block mx-auto me-sm-0 mb-3"
                />
                <h3 className="sub-heading base-color fw-bold fs-5 text-sm-end mb-3 mb-sm-0 pb-1">
                  OUR MISSION
                </h3>
                <p>
                  Our mission is to ensure that artificial general intelligence
                  (AGI)-by which we mean highly autonomous systems that
                  outperform humans at most humanity. We will attempt to
                  directly build safe and beneficial AGI. but will also consider
                  our mission fulfilled if our work achieve this outcome.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="info-wrapper-sention-3 white py-5">
          <div className="container-lg">
            <div className="row pb-5">
              <div className="col-12 col-sm-6 pe-sm-5">
                <h3 className="sub-heading base-color fw-bold fs-3 text-sm-start mb-3 pb-2 mb-sm-0">
                  DRIVEN TO WIN
                </h3>
                <p>
                  W're solving a hard problem that requires incredible focus and
                  commitment. Success means doing a few things differently.
                </p>
              </div>
              <div className="col-12 col-sm-6 ps-sm-5 mt-5">
                <img
                  src={InfoImage}
                  alt="info_Image"
                  className="d-block mx-auto me-sm-0 mb-3"
                />
                <h3 className="sub-heading base-color fw-bold fs-5 text-sm-end mb-3 mb-sm-0 pb-1">
                  LEADING THE MOVEMENT
                </h3>
                <p>
                  We're a team with a multitude of experience and perspective.
                  With decades of engineering, science, and domain expertise,
                  we're incorporating our best practices to create a company for
                  the long-term and building AI driven products that will
                  deliver the benefits to all of humanity.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* COMPANY HISTORY SECTION */}
        <section className="company-history-wrapper base-gradient-background py-5">
          <div className="container-lg">
            <div className="row">
              <h2 className="heading fw-bold white mb-sm-5">
                IntelsenseAI History and Timeline
              </h2>
              {/* image */}
              <div className="col-12 col-md-5 px-5 ps-md-0 rounded-4">
                <div>
                  <img
                    src={HistoryImage}
                    className="img-fluid rounded-4"
                    alt="history_image"
                  />
                </div>
              </div>
              {/* history */}
              <div className="col-12 col-md-7 white mx-md-0 mt-5 mt-md-0">
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="year fs-5 fw-bold text-center text-sm-start mb-0">
                    1990
                  </p>
                  <p className="info fs-5 fw-bold text-center text-sm-start">
                    Founded By Rumman Arefin. Current CEO
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="year fs-5 fw-bold text-center text-sm-start mb-0">
                    1999
                  </p>
                  <p className="info fs-5 fw-bold text-center text-sm-start">
                    Introduced HIA. And got a huge success. Top 5 products of
                    IntelsenseAI.
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="year fs-5 fw-bold text-center text-sm-start mb-0">
                    2001
                  </p>
                  <p className="info fs-5 fw-bold text-center text-sm-start">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa, atque!
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="yyear fs-5 fw-bold text-center text-sm-start mb-0">
                    2012
                  </p>
                  <p className="info fs-5 fw-bold text-center text-sm-start">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum vitae sapiente consequatur. Beatae dignissimos eaque
                    fuga autem minus rerum inventore.
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="year fs-5 fw-bold text-center text-sm-start mb-0">
                    2021
                  </p>
                  <p className="info fs-5 fw-bold text-center text-sm-start">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* WORK SECTION */}
        <section className="work-wrapper white py-5">
          <div className="container-lg">
            <div className="row pb-5">
              <div className="col-12 col-md-4 pe-sm-3">
                <img
                  src={InfoImage1}
                  alt="info_Image"
                  className="d-block mx-auto mx-sm-0 mb-3 info-image"
                />
                <h3 className="sub-heading base-color fw-bold fs-3 text-sm-start mb-3 pb-2 mb-sm-0">
                  AREA OF OUR WORK
                </h3>
                <p>
                  Composition of Machine Learning and Deep Learning Techniques
                  in Computer Vision, Natural Language Processing
                  productionalizing, Intelligence Chatbots. Domain Specific/Open
                  Domain specific Recognition System . Virtual Assistance and
                  Internet of things.
                </p>
              </div>
              <div className="col-12 col-md-4 px-5 px-md-0 pt-4 pt-md-0">
                <div className="px-sm-5 px-md-0">
                  <img
                    src={WorkImage}
                    className="img-fluid"
                    alt="middle_image"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4 ps-sm-3 mt-5">
                <img
                  src={InfoImage}
                  alt="info_Image"
                  className="d-block mx-auto me-sm-0 mb-3 info-image"
                />
                <h3 className="sub-heading base-color fw-bold fs-5 text-sm-end mb-3 mb-sm-0 pb-1">
                  LEADING THE MOVEMENT
                </h3>
                <p>
                  We're a team with a multitude of experience and perspective.
                  With decades of engineering, science, and domain expertise,
                  we're incorporating our best practices to create a company for
                  the long-term and building AI driven products that will
                  deliver the benefits to all of humanity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
