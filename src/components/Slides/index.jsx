import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const index = () => {
  
    const fadeImages = [
        {
          url: 'https://images.unsplash.com/photo-1671725779305-bff966b40cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
         
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
         
        },
      ];
  
    return (
        <div className="slide-container" >
        <Slide >
          {fadeImages.map((fadeImage, index) => (
            <div key={index} >
              <img style={{ width: '100%' }} src={fadeImage.url} />
            </div>
          ))}
        </Slide>
      </div>
  )
}

export default index
