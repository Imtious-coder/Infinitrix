import React from "react";
import ArrangeDemonstration from "../../components/ArrangeDemonstration/ArrangeDemonstration";
import Aspiring from "../../components/Aspiring/Aspiring";
import Hero from "../../components/Hero/Hero";
import IndustryLeaders from "../../components/IndustryLeaders/IndustryLeaders";
import IntelsenseInNumbers from "../../components/IntelsenseInNumbers/IntelsenseInNumbers";
import Meta from "../../components/Meta/Meta";
import PartnersPortfolio from "../../components/PartnersPortfolio/PartnersPortfolio";
import Products from "../../components/Products/Products";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";

const index = () => {
  return (
    <>
      <Meta title={"IntelsenseAI | Sense The Future"} />
      <Hero />
      <Services />
      <Aspiring />
      <Products />
      <Review />
      <IntelsenseInNumbers />
      <PartnersPortfolio />
      <IndustryLeaders />
      <ArrangeDemonstration />
    </>
  );
};

export default index;
