import React from "react";
import InfoImage1 from "../../Assets/images/ABOUT/info-image-1.svg";
import InfoImage from "../../Assets/images/ABOUT/info-image.svg";
import HeroImage from "../../Assets/images/ABOUT/left-hero-img.svg";
import HistoryImage from "../../Assets/images/ABOUT/team_intelsense_ai_.jpg";
import WorkImage from "../../Assets/images/ABOUT/work.webp";
import Meta from "../../components/Meta/Meta";
import "./About.scss";

const About = () => {
  return (
    <>
      <Meta title={"About US"} />
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
                  At Intelsense AI, we are a team of highly skilled and
                  passionate individuals dedicated to creating cutting-edge AI
                  solutions for businesses across various industries. Our team
                  consists of data scientists, software engineers, and AI
                  specialists who work tirelessly to develop innovative products
                  that drive growth and efficiency.
                </p>
                <p className="fw-bold text-center text-sm-start">
                  Our team consists of data scientists, software engineers, and
                  AI specialists who work tirelessly to develop innovative
                  products that drive growth and efficiency.
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
                  Intelsense AI was founded with a vision to revolutionize the
                  way businesses operate by leveraging the power of artificial
                  intelligence. Our journey began with a small group of AI
                  enthusiasts 10 years ago, who shared a common passion for
                  developing innovative solutions that could make a real
                  difference in the world.
                </p>
                <p>
                  Over the years, our team has grown, and so has our expertise.
                  Today, we are proud to have developed some of the most
                  advanced AI solutions in the market, helping businesses to
                  streamline their operations, increase productivity, and drive
                  growth.
                </p>
              </div>
              <div className="col-12 col-sm-6 ps-sm-5 mt-5">
                <img
                  src={InfoImage}
                  alt="info_Image"
                  className="d-block mx-auto me-sm-0 mb-3"
                />
                <h3 className="sub-heading base-color fw-bold  text-sm-end mb-3 pb-1 mb-sm-0">
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
                  At Intelsense AI, our purpose is to empower businesses with
                  the latest AI technology so that they can thrive in the
                  digital age. We believe that speech-based AI has the potential
                  to transform the way businesses operate and help them achieve
                  their full potential. We are committed to developing AI
                  solutions that are accessible, easy to use, and can be
                  integrated seamlessly into any existing business processes.
                </p>
                <p>
                  We believe in putting our customers first and working closely
                  with them to understand their unique needs and challenges. By
                  doing so, we can create customized solutions that address
                  their specific pain points and help them achieve their
                  business goals. We aim to simplify the communication process
                  as much as possible and increase the efficient extraction of
                  information.
                </p>
              </div>
              <div className="col-12 col-sm-6 ps-sm-5 mt-5">
                <img
                  src={InfoImage}
                  alt="info_Image"
                  className="d-block mx-auto me-sm-0 mb-3"
                />
                <h3 className="sub-heading base-color fw-bold  text-sm-end mb-3 mb-sm-0 pb-1">
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
                <h3 className="sub-heading base-color fw-bold  text-sm-end mb-3 mb-sm-0 pb-1">
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
                  <p className="year  fw-bold text-center text-sm-start mb-0">
                    1990
                  </p>
                  <p className="info  fw-bold text-center text-sm-start">
                    Founded By Rumman Arefin. Current CEO
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="year  fw-bold text-center text-sm-start mb-0">
                    1999
                  </p>
                  <p className="info  fw-bold text-center text-sm-start">
                    Introduced HIA. And got a huge success. Top 5 products of
                    IntelsenseAI.
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="year  fw-bold text-center text-sm-start mb-0">
                    2001
                  </p>
                  <p className="info  fw-bold text-center text-sm-start">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa, atque!
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="yyear  fw-bold text-center text-sm-start mb-0">
                    2012
                  </p>
                  <p className="info  fw-bold text-center text-sm-start">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum vitae sapiente consequatur. Beatae dignissimos eaque
                    fuga autem minus rerum inventore.
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="year  fw-bold text-center text-sm-start mb-0">
                    2021
                  </p>
                  <p className="info  fw-bold text-center text-sm-start">
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
                <h3 className="sub-heading base-color fw-bold  text-sm-end mb-3 mb-sm-0 pb-1">
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
