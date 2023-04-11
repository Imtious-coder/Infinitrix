import React from "react";
import ArrangeDemonstration from "../../components/ArrangeDemonstration/ArrangeDemonstration";
import Aspiring from "../../components/Aspiring/Aspiring";
import Hero from "../../components/Hero/Hero";
import IntelsenseInNumbers from "../../components/IntelsenseInNumbers/IntelsenseInNumbers";
import Products from "../../components/Products/Products";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";

const index = () => {
  return (
    <>
      <Hero />
      <Services />
      <Aspiring />
      <Products />
      <ArrangeDemonstration />
      <Review />
      <IntelsenseInNumbers />
    </>
  );
};

export default index;
