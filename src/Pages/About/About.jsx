import React from "react";
import WorkImage from "../../Assets/images/ABOUT/1.jpg";
import InfoImage1 from "../../Assets/images/ABOUT/info-image-1.svg";
import InfoImage from "../../Assets/images/ABOUT/info-image.svg";
import HeroImage from "../../Assets/images/ABOUT/left-hero-img.svg";
import HistoryImage from "../../Assets/images/ABOUT/team_intelsense_ai_.jpg";
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
            {/* <div className="hero-left col-12 col-md-6 d-flex align-items-center">
              <h2 className="heading text-sm-start fw-bold white px-4 py-5 py-md-0 mb-0">
                Widening the boundary of Imagination Creating the outline of the
                future.
              </h2>
            </div> */}
            <div className="col-12 background-1E1F2E white px-5 py-5">
              <div className="hero-right">
                <h2 className="heading mb-0">WHO WE ARE</h2>
                <img
                  src={HeroImage}
                  alt="logo"
                  className="d-block mx-auto my-5"
                />
                <p className="fw-bold text-center text-sm-start">
                  At Infinitrix AI, we're a dedicated team of passionate
                  professionals committed to crafting cutting-edge AI solutions
                  tailored for diverse industries. Our multidisciplinary team
                  includes data scientists, software engineers, and AI
                  specialists, collaborating tirelessly to pioneer innovative
                  products that propel growth and enhance operational
                  efficiency.
                </p>
                <p className="fw-bold text-center text-sm-start">
                  Our diverse team of experts, including data scientists,
                  software engineers, and AI specialists, is driven by a shared
                  mission: to develop groundbreaking products that drive growth
                  and efficiency across industries.
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
                  Infinitrix was founded with a bold vision: to transform
                  business operations through the unparalleled capabilities of
                  artificial intelligence. Our journey began a decade ago,
                  driven by a tight-knit group of AI enthusiasts united by a
                  shared passion for pioneering solutions that create tangible
                  impact.
                </p>
                <p>
                  Over the years, our team has expanded, evolving alongside our
                  expertise. Today, we take immense pride in delivering some of
                  the most advanced AI solutions available, empowering
                  businesses to optimize operations, boost productivity, and
                  foster sustainable growth.
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
                  Infinitrix offers comprehensive AI services, solutions, and
                  products tailored to assist organizations across diverse
                  industries in implementing AI effectively. With AI research
                  and development centers located in Bangladesh, the US, and
                  Canada, we are uniquely positioned to address complex
                  challenges, customize real-world AI applications for immediate
                  impact, and spearhead future innovations.
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
                  At Infinitrix, our mission is to empower businesses with
                  cutting-edge AI technology, enabling them to thrive in the
                  digital era. We firmly believe that speech-based AI holds the
                  key to revolutionizing business operations and unlocking their
                  full potential. Our dedication lies in developing AI solutions
                  that are not only accessible and user-friendly but also
                  seamlessly integrable into existing business workflows.
                </p>
                <p>
                  Customer-centricity is at the heart of our approach. We
                  prioritize close collaboration with our clients to gain
                  insights into their distinct needs and challenges. This
                  enables us to tailor customized solutions that precisely
                  address their pain points and propel them towards achieving
                  their business objectives. Our aim is to simplify
                  communication processes and enhance the efficient extraction
                  of valuable information.
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
                  Infinitrix's mission is to push the boundaries of AI
                  innovation, creating highly autonomous systems that excel
                  across diverse domains. We prioritize the development of AI
                  solutions that are both safe and beneficial. Alternatively, we
                  consider our mission accomplished if our efforts contribute to
                  advancing this transformative outcome.
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
                Infinitrix History and Timeline
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
                    Founded By Imtious Islam. Current CEO
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="year  fw-bold text-center text-sm-start mb-0">
                    1999
                  </p>
                  <p className="info  fw-bold text-center text-sm-start">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
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
                <div className="d-flex flex-column flex-sm-row gap-sm-5 mb-4 mb-sm-0">
                  <p className="year  fw-bold text-center text-sm-start mb-0">
                    2024
                  </p>
                  <p className="info  fw-bold text-center text-sm-start">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum vitae sapiente consequatur. Beatae dignissimos eaque
                    fuga autem minus rerum inventore.
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
                  Infinitrix specializes in integrating Machine Learning and
                  Deep Learning techniques into various applications, including
                  Computer Vision, Natural Language Processing, image and voice
                  processing, and the productionalizing of intelligent Chatbots.
                  Our expertise extends to developing Domain Specific and Open
                  Domain recognition systems tailored to specific industry
                  needs. Additionally, we offer solutions in Virtual Assistance
                  and Internet of Things (IoT), ensuring seamless integration
                  and enhanced performance in diverse environments.
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
