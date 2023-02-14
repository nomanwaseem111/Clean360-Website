import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {  Box, Stack,Typography } from "@mui/material";
import worker1 from '../assets/worker-1.jpg'
import worker2 from '../assets/worker-2.jpg'
import worker3 from '../assets/worker-3.jpg'
import worker4 from '../assets/worker-4.jpg'
import worker5 from '../assets/worker-5.jpg'
import worker6 from '../assets/worker-6.jpg'
import worker7 from '../assets/worker-7.jpg'
import worker8 from '../assets/worker-8.jpg'
import worker9 from '../assets/worker-9.jpg'
import worker10 from '../assets/worker-10.jpg'
import worker11 from '../assets/worker-11.jpg'
import worker12 from '../assets/worker-12.jpg'

const index = () => {
  
    const fadeImages = [
        {
          link1: worker1,
          link2:worker2,
          link3:worker3,
          link4:worker4,
          link5:worker5,
          link6:worker6,
          link7:worker7,
          link8:worker8,
          link9:worker9,
          link10:worker10,
          link11:worker11,
          link12:worker12,



        }
      ];
  
    return (
        <>
        
      <Stack display={{md:'flex',xs:"flex"}} mb={{md:"100px",xs:"40px",sm:"80px"}}  mt={{md:"72px",xs:"45px",sm:"75px"}} height={{md:"800px",xs:"200px"}} backgroundColor={{md:'#fff',xs:"#fff"}} justifyContent={{md:"center",xs:'center'}} alignItems={{md:"center",xs:"center"}}>
       
        <Stack mb={{md:"0px",xs:"0px"}}  sx={{width:{md:"100%",xs:"100%"},height:{md:"auto",xs:'auto'},background:{md:"#fff",xs:'#fff'}}} >
        <Stack >
       <Typography variant='h3'   color={{ md: "#f7941d", xs: "#f7941d" }}
            fontWeight={{ md: "800", xs: "800" }}
            textAlign={{ md: "center", xs: "center" }}
            mt={{md:"40px",xs:"30px"}}
            mb={{md:'40px',xs:"20px"}}
            fontSize={{ md: "50px", xs: "30px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
            >Our Team</Typography>
      
      
      </Stack>
        <Slide >
          {fadeImages.map((fadeImage, index) => (
            <Stack display={{md:"flex",xs:"flex"}} height={{md:"800px",xs:'auto'}}  justifyContent={{md:"space-around",xs:"space-around"}} alignItems={{md:"center",xs:'center'}} flexDirection={{md:"row",xs:"row"}} key={index} >
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link1} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link2} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link3} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link4} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link5} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link6} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link7} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link8} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link9} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link10} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link11} />
              <Box component="img" sx={{ width:{md:"40%",xs:"100%"},height:{md:"800px",xs:'200px',sm:"250px"} }} src={fadeImage.link12} />

            </Stack>
          ))}
        </Slide>
      </Stack>
      </Stack>
      </>
  )
}

export default index
