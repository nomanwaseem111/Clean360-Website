import { Typography } from "@mui/material"
import React from "react"
import { Carousel } from "react-responsive-carousel"

const index = () => {
  return (
    <>
    <Carousel  showArrows={true} dynamicHeight={true} showThumbs={false}>
      <div>
         
        <img
          alt=""
          src="https://clean360.dexignlab.com/xhtml/images/main-slider/slide4.jpg"
          
        />
        <div className="banner">
            <div className="banner-inner">
            <h1 className="heading">PEST CONTROL SERVICES</h1>
            <p className="para">Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos skateboard migas farm-to-table artisan kombucha.</p>
            </div>
        </div>

      </div>
      <div>
        <img
          alt=""
          src="https://clean360.dexignlab.com/xhtml/images/main-slider/slide4.jpg"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://clean360.dexignlab.com/xhtml/images/main-slider/slide4.jpg"
        />
      </div>
    </Carousel>
  
    </>
  )
}

export default index
