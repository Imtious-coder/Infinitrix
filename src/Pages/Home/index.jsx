import React from "react";
import ArrangeDemonstration from "../../components/ArrangeDemonstration/ArrangeDemonstration";
import Aspiring from "../../components/Aspiring/Aspiring";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";

const index = () => {
  return (
    <>
      <Hero />
      <Services />
      <Aspiring />
      <Products />

      {/*  */}
      <ArrangeDemonstration />
    </>
  );
};

export default index;
