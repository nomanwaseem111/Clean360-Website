import React, { useContext } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import WhyUs from "../WhyUs"
import Section2 from "../Section2"
import Slides from "../Slides"
import Banner2 from "../Banner2"
import Service from "../Service"
import About from "../About"
import { data } from "../../App"
import Team from '../ourTeam'
import ReviewForm from '../ReviewForm'
import Review from '../Review'


const Home = () => {

  const { homeRef, whyUsRef, servicesRef, aboutRef, reviewRef } = useContext(data)

  return (
    <div>
      <Banner2 ref={homeRef} />

      <About ref={aboutRef} />
      <Service ref={servicesRef} />
      <WhyUs ref={whyUsRef} />

       <ReviewForm />
      <Review ref={reviewRef} />


      <Section2 />
       <Team />
      <Slides />  
    </div>
  )
}

export default Home
