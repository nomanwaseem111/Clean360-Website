import React from "react";
import Banner from "../Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Services from "../Services";
import WhyUs from "../WhyUs";
import Section2 from "../Section2";

const index = () => {
  return (
    <div>
      <Banner />
      <WhyUs />
      <Services />
      <Section2 />
    </div>
  );
};

export default index;
