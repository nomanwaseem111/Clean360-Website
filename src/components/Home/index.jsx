import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhyUs from "../WhyUs";
import Section2 from "../Section2";
import Slides from '../Slides'
import Banner2 from '../Banner2'
import Service from '../Service'
import About from '../About';

const index = () => {
  return (
    <div>
     <Banner2/>
      {/* <Banner /> */}
      
      <About/>  
      <Service/>
      <WhyUs /> 
      
     
     
      {/* <Services /> */}
      <Section2 />
     
      <Slides/>
    </div>
  );
};

export default index;
