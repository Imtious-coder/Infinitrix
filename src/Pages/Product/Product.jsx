import React from "react";
import "./Product.scss";
// PRODUCT IMAGES
import { Link } from "react-router-dom";
import ProdductImage3 from "../../Assets/images/HOME/productlogo/Airvoice.png";
import ProdductImage2 from "../../Assets/images/HOME/productlogo/SenseBot2.png";
import ProdductImage1 from "../../Assets/images/HOME/productlogo/SenseVoice.png";
import ProdductImage4 from "../../Assets/images/HOME/productlogo/hia_img1.png";

const Product = () => {
  return (
    <>
      <section className="product-wrapper">
        <div className="hero py-5 background-1E1F2E">
          <h2 className="heading fw-bold white"> Our Products</h2>
        </div>
        {/* products */}
        <div className="single-product overflow-hidden">
          {/* first-product */}
          <div className="row mb-5 m-md-0">
            <div className="col-12 col-md-6 p-0 mb-0 bg-dark">
              <div className="h-100">
                <iframe
                  className="bg-dark"
                  src="https://www.youtube.com/embed/1cCOfF3d03E"
                  title="Sensevoice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-md-6 details-1 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <img
                  src={ProdductImage1}
                  className="mx-auto"
                  alt="product-logo"
                />
                <div className="px-4">
                  {/* <h2 className="heading">Sensevoice</h2> */}
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Transcription Platform supported by Custom Built Speech
                    Recognition & Text To Speech Engine.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    Online shopping has now become a part of our daily lives,
                    whether you wish to buy your daily groceries or your
                    favorite apparel. Nowadays, you can purchase anything from
                    e-commerce platforms or online businesses from the comfort
                    of your own home at any time. favorite apparel. Nowadays,
                    you can purchase anything from e-commerce platforms or
                    online businesses from the comfort of your own home at any
                    time.
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
          {/* second product */}
          <div className="row mb-5 m-md-0">
            <div className="col-12 col-md-6 details-2 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <img
                  src={ProdductImage2}
                  className="mx-auto"
                  alt="product-logo"
                />
                <div className="px-4">
                  {/* <h2 className="heading">Sensevoice</h2> */}
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Deep Learning Based Conversational AI Chatbot Platform.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    Voice assistants have already proven to be a valuable tool
                    in every business, from small to major local and global
                    enterprises. Meet HIA - Intelsense.AI's Deep Learning Based
                    Virtual Financial Assistant that is set to revolutionize the
                    market.HIA can serve as a stepping stone in reducing
                    financial costs and boosting customer satisfaction.
                    market.HIA can serve as a stepping stone in reducing
                    financial costs and boosting customer satisfaction.
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
                <iframe
                  className="bg-dark"
                  src="https://www.youtube.com/embed/mnANeEgMyZE"
                  title="Sensevoice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          {/* third product */}
          <div className="row mb-5 m-md-0">
            <div className="col-12 col-md-6 p-0 mb-0 bg-dark">
              <div className="h-100">
                <iframe
                  className="bg-dark"
                  src="https://www.youtube.com/embed/OEgjG5fADgI"
                  title="Sensevoice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-md-6 details-3 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <img
                  src={ProdductImage3}
                  className="mx-auto"
                  alt="product-logo"
                />
                <div className="px-4">
                  {/* <h2 className="heading">Sensevoice</h2> */}
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    AI Driven Voice Commerce service for e-commerce platforms
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    We had to go to stores to try on clothing at times. Things
                    have surely changed in this technological age. Virtual
                    try-on has added a whole new level to the buying experience,
                    making it more customer-friendly. Virtual try on is the
                    technique through which we may imagine ourselves by trying
                    on garments of our choice. This method just requires
                    unpaired single pictures.
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
                <img
                  src={ProdductImage4}
                  className="mx-auto mb-4"
                  alt="product-logo"
                />
                <div className="px-4">
                  {/* <h2 className="heading">Sensevoice</h2> */}
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Voice Based AI-powered virtual assistant of Intelsense AI,
                    that combines ASR, TTS, NLP, & NLU.
                  </h3>
                  <h6 className="description text-center text-sm-start">
                    Assume you're looking through Instagram and an outfit
                    catches your attention. You like it so much that you want to
                    buy it right now, but the price is a little out of your
                    financial range. Assume the same thing happened at a party,
                    but you're not sure if you should question the other
                    individual.
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
                <iframe
                  className="bg-dark"
                  src="https://www.youtube.com/embed/MrJkZZyOLw8"
                  title="Sensevoice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
