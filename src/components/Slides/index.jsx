import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Typography, Button, Box, Stack } from "@mui/material";


const index = () => {
  
    const fadeImages = [
        {
          link1: 'https://clean360.dexignlab.com/xhtml/images/client-logo/logo1.jpg',
          link2:'https://clean360.dexignlab.com/xhtml/images/client-logo/logo2.jpg',
          link3:'https://clean360.dexignlab.com/xhtml/images/client-logo/logo3.jpg',
          link4:'https://clean360.dexignlab.com/xhtml/images/client-logo/logo2.jpg'


        },
        {
          link1: 'https://clean360.dexignlab.com/xhtml/images/client-logo/logo1.jpg',
          link2:'https://clean360.dexignlab.com/xhtml/images/client-logo/logo2.jpg',
          link3:'https://clean360.dexignlab.com/xhtml/images/client-logo/logo3.jpg',
          link4:'https://clean360.dexignlab.com/xhtml/images/client-logo/logo2.jpg'

        },
        {
          link1: 'https://clean360.dexignlab.com/xhtml/images/client-logo/logo1.jpg',
          link2:'https://clean360.dexignlab.com/xhtml/images/client-logo/logo2.jpg',
          link3:'https://clean360.dexignlab.com/xhtml/images/client-logo/logo3.jpg',
          link4:'https://clean360.dexignlab.com/xhtml/images/client-logo/logo2.jpg'

        },
      ];
  
    return (
      <Stack display={{md:'flex',xs:"flex"}} height={{md:"200px",xs:"200px"}} backgroundColor={{md:"#fff",xs:"#fff"}} justifyContent={{md:"center",xs:'center'}} alignItems={{md:"center",xs:"center"}}>
        <Stack  sx={{width:{md:"60%",xs:"100%"},height:{md:"100px",xs:'auto'},background:{md:"#fff",xs:'#fff'}}} >
        <Slide >
          {fadeImages.map((fadeImage, index) => (
            <Stack display={{md:"flex",xs:"flex"}}   justifyContent={{md:"space-around",xs:"space-around"}} alignItems={{md:"center",xs:'center'}} flexDirection={{md:"row",xs:"row"}} key={index} >
              <Box component="img" sx={{ width:{md:"20%",xs:"20%"},height:{md:"100px",xs:'100px'} }} src={fadeImage.link1} />
              <Box component="img" sx={{ width:{md:"20%",xs:"20%"},height:{md:"100px",xs:'100px'} }} src={fadeImage.link2} />
              <Box component="img" sx={{ width:{md:"20%",xs:"20%"},height:{md:"100px",xs:'100px'} }} src={fadeImage.link3} />
              <Box component="img" sx={{ width:{md:"20%",xs:"20%"},height:{md:"100px",xs:'100px'} }} src={fadeImage.link4} />

            </Stack>
          ))}
        </Slide>
      </Stack>
      </Stack>
  )
}

export default index
