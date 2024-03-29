import React from "react";
import ArrangeDemonstration from "../../components/ArrangeDemonstration/ArrangeDemonstration";
import Aspiring from "../../components/Aspiring/Aspiring";
import Hero from "../../components/Hero/Hero";
import IndustryLeaders from "../../components/IndustryLeaders/IndustryLeaders";
import Meta from "../../components/Meta/Meta";
import PartnersPortfolio from "../../components/PartnersPortfolio/PartnersPortfolio";
import Products from "../../components/Products/Products";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";

const index = () => {
  return (
    <>
      <Meta title={"Infinitrix | Best AI Solutions"} />
      <Hero />
      <Services />
      <Aspiring />
      <Products />
      <Review />
      <IndustryLeaders />
      <PartnersPortfolio />
      <ArrangeDemonstration />
    </>
  );
};

export default index;
