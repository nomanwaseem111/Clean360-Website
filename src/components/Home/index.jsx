import React, { useContext } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import WhyUs from "../WhyUs"
import Section2 from "../Section2"
import Slides from "../Slides"
import Banner2 from "../Banner2"
import Service from "../Service"
import About from "../About"
import { data } from "../../App"

const Home = () => {
 
  const {homeRef, whyUsRef} = useContext(data)
  
  console.log(homeRef)
 
  return (
    <div>
      <Banner2 ref={homeRef} />

      <About />
      <Service />
      <WhyUs ref={whyUsRef}/>

      <Section2 />

      <Slides />
    </div>
  )
}

export default Home
