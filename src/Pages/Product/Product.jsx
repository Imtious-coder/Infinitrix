import React from "react";
import Meta from "../../components/Meta/Meta";
import "./Product.scss";
// PRODUCT IMAGES
import { Link } from "react-router-dom";
import Image1 from "../../Assets/images/PRODUCTS/1.jpg";
import Image2 from "../../Assets/images/PRODUCTS/1.png";
import Image6 from "../../Assets/images/PRODUCTS/1.webp";
import Image3 from "../../Assets/images/PRODUCTS/2.jpg";
import Image5 from "../../Assets/images/PRODUCTS/2.png";
import Image4 from "../../Assets/images/PRODUCTS/3.jpg";
import Image7 from "../../Assets/images/PRODUCTS/4.jpg";

const Product = () => {
  return (
    <>
      <Meta title={"Products"} />
      <section className="product-wrapper">
        <div className="hero py-5 base-gradient-background">
          <h2 className="heading fw-bold white">Our Products</h2>
        </div>
        {/* products */}
        <div className="single-product overflow-hidden">
          {/* first-product */}
          <div className="row mb-5 m-md-0">
            <div className="col-12 col-md-6 p-0 mb-0 bg-dark">
              <div className="h-100">
                <img src={Image1} alt="product_image" />
                {/* <iframe
                  className="bg-dark"
                  src="https://www.youtube.com/embed/JiT16qCBpSE?si=3IACJv_j00CK3fYB"
                  title="Sensevoice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
            <div className="col-12 col-md-6 details-1 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <div className="px-4">
                  <p className="title text-center pb-2">SynthAI</p>
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Empower your creative journey with SynthAI's innovative
                    AI-driven music composition tools.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    SynthAI offers state-of-the-art AI-driven music composition
                    tools, providing unparalleled assistance and inspiration to
                    musicians and composers worldwide. Our platform leverages
                    advanced machine learning algorithms to analyze musical
                    patterns and generate original compositions in various
                    genres and styles. Whether you're a professional musician or
                    an aspiring artist, SynthAI provides the tools you need to
                    unleash your creativity and explore new musical horizons.
                    With its intuitive interface and customizable settings, our
                    platform adapts to your preferences and helps you craft
                    unique compositions that resonate with your audience. Join
                    the revolution in music creation with SynthAI as your
                    creative companion.
                  </h6>
                  <Link to="/coming-soon">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* second product */}
          <div className="row mb-5 m-md-0">
            <div className="col-12 col-md-6 details-2 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <div className="px-4">
                  <p className="title text-center pb-2">NeuroSync</p>
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Enhance cognitive functions with NeuroSync's advanced
                    brain-computer interface technology.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    NeuroSync is a groundbreaking platform that combines
                    cutting-edge brain-computer interface technology with
                    advanced neurofeedback techniques to enhance cognitive
                    functions and optimize mental performance. Our platform
                    utilizes real-time brainwave analysis to provide
                    personalized training programs tailored to each user's
                    unique cognitive profile. Whether you're looking to improve
                    focus, memory, or creativity, NeuroSync offers
                    scientifically validated protocols to help you achieve your
                    cognitive goals. With its user-friendly interface and
                    interactive training modules, our platform makes brain
                    training accessible to everyone. Unlock your brain's full
                    potential with NeuroSync and experience a new level of
                    mental clarity and productivity.
                  </h6>
                  <Link to="/comming-soon">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-0">
              <div className="h-100">
                <img src={Image2} alt="product_image" />
              </div>
            </div>
          </div>
          {/* third product */}
          <div className="row mb-5 m-md-0">
            <div className="col-12 col-md-6 p-0 mb-0 bg-dark">
              <div className="h-100">
                <img src={Image3} alt="product_image" />
              </div>
            </div>
            <div className="col-12 col-md-6 details-3 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <div className="px-4">
                  <p className="title text-center pb-2">LingoGenius</p>
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Break language barriers effortlessly with LingoGenius's
                    AI-powered translation solutions.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    LingoGenius is a cutting-edge AI-powered translation
                    platform that revolutionizes multilingual communication. Our
                    advanced natural language processing algorithms enable
                    accurate and fluent translation of text, speech, and
                    documents across multiple languages. Whether you're
                    traveling abroad, conducting business globally, or learning
                    a new language, LingoGenius provides the tools you need to
                    break down language barriers and connect with people around
                    the world. With support for a wide range of languages and
                    dialects, our platform ensures precise and contextually
                    relevant translations in real-time. Experience seamless
                    communication across borders with LingoGenius.
                  </h6>
                  <Link to="/comming-soon">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* fourth product */}
          <div className="row m-0">
            <div className="col-12 col-md-6 details-4 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <div className="px-4">
                  <p className="title text-center pb-2">MindScribe</p>
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Unlock your inner potential with MindScribe's AI-driven
                    personal growth companion.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    MindScribe is an AI-driven personal growth companion
                    designed to help individuals achieve their goals and
                    cultivate a positive mindset. Our platform combines
                    cognitive behavioral therapy techniques with mindfulness
                    practices to empower users to overcome challenges, manage
                    stress, and enhance well-being. Whether you're striving for
                    personal or professional development, MindScribe provides
                    personalized insights and actionable recommendations to
                    support your journey. With its intuitive interface and
                    interactive exercises, our platform fosters self-awareness
                    and resilience, enabling you to thrive in all aspects of
                    life. Start your journey towards a happier and healthier you
                    with MindScribe by your side.
                  </h6>
                  <Link to="/comming-soon">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-0 mb-0 bg-dark">
              <div className="h-100">
                <img src={Image4} alt="product_image" />
              </div>
            </div>
          </div>
          {/* fifth product */}
          <div className="row mb-5 m-md-0">
            <div className="col-12 col-md-6 p-0 mb-0 bg-dark">
              <div className="h-100">
                <img src={Image5} alt="product_image" />
              </div>
            </div>
            <div className="col-12 col-md-6 details-3 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <div className="px-4">
                  <p className="title text-center pb-2">CryoCraft</p>
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Explore the uncharted realms of creativity with CryoCraft's
                    AI-powered art generation tools.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    CryoCraft is a revolutionary AI-powered art generation
                    platform that redefines the boundaries of creativity. Our
                    platform leverages deep learning algorithms to analyze
                    artistic styles and generate original artworks with stunning
                    visual appeal. Whether you're an artist, designer, or
                    hobbyist, CryoCraft provides a diverse range of tools and
                    filters to spark your imagination and bring your ideas to
                    life. From abstract compositions to photorealistic
                    landscapes, our platform offers endless possibilities for
                    artistic expression and exploration. Join the evolution of
                    art with CryoCraft as your creative muse.
                  </h6>
                  <Link to="/comming-soon">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* sixth product */}
          <div className="row m-0">
            <div className="col-12 col-md-6 details-4 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <div className="px-4">
                  <p className="title text-center pb-2">VitaFit</p>
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Achieve your fitness goals with VitaFit's AI-driven
                    personalized training platform.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    VitaFit is an AI-driven personalized training platform
                    designed to optimize your fitness journey and maximize
                    results. Our platform combines cutting-edge machine learning
                    algorithms with expert fitness coaching to deliver tailored
                    workout plans and nutritional guidance based on your unique
                    goals and preferences. Whether you're looking to build
                    muscle, lose weight, or improve overall health, VitaFit
                    provides the tools and support you need to succeed. With its
                    intuitive workout tracker and progress analytics, our
                    platform keeps you motivated and accountable every step of
                    the way. Take charge of your fitness with VitaFit and unlock
                    your full potential.
                  </h6>
                  <Link to="/comming-soon">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-0 mb-0 bg-dark">
              <div className="h-100">
                <img src={Image6} alt="product_image" />
              </div>
            </div>
          </div>
          {/* seventh product */}
          <div className="row mb-5 m-md-0">
            <div className="col-12 col-md-6 p-0 mb-0 bg-dark">
              <div className="h-100">
                <img src={Image7} alt="product_image" />
              </div>
            </div>
            <div className="col-12 col-md-6 details-3 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <div className="px-4">
                  <p className="title text-center pb-2">QuantumCraft</p>
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Embark on a quantum computing journey with QuantumCraft's
                    innovative AI-powered quantum development platform.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    QuantumCraft is a pioneering quantum development platform
                    that empowers researchers and developers to explore the
                    potential of quantum computing with advanced AI
                    capabilities. Our platform provides a comprehensive suite of
                    tools for quantum algorithm design, simulation, and
                    optimization, enabling users to tackle complex computational
                    problems with unprecedented speed and efficiency. Whether
                    you're developing quantum algorithms for optimization,
                    cryptography, or machine learning, QuantumCraft offers the
                    resources you need to push the boundaries of computational
                    science. With its intuitive interface and scalable
                    infrastructure, our platform accelerates the pace of quantum
                    innovation and drives breakthroughs in AI-driven quantum
                    computing. Join us on the frontier of quantum technology
                    with QuantumCraft.
                  </h6>
                  <Link to="/comming-soon">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
