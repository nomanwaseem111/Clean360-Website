import React from "react";
import Banner from "../Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Services from "../Services";
import WhyUs from "../WhyUs";
import Section2 from "../Section2";
import Slides from '../Slides'


const index = () => {
  return (
    <div>
      <Banner />
      <WhyUs />
      <Services />
      <Section2 />
      <Slides/>
    </div>
  );
};

export default index;
