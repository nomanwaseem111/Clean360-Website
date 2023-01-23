import React from 'react'
import { Typography, Box, Stack } from "@mui/material";

const index = () => {
  return (
    
    <Stack  sx={{width:{md:"100%",xs:"100%",lg:"100%",sm:"100%"},height:{md:"100vh",xs:"50vh",sm:"50vh",lg:"100vh"},position:{md:"relative",xs:"relative",lg:"relative",sm:"relative"}}}>
    <Box   sx={{width:{md:"100%",xs:"100%"},height:{md:"100vh",xs:"50vh",sm:"50vh",lg:"100vh"}}} component="img" src="https://clean360.dexignlab.com/xhtml/images/main-slider/slide4.jpg"/>
    
    <Stack sx={{position:{md:"absolute",xs:"absolute",sm:"absolute",lg:"absolute"},top:{md:"50%",xs:"50%",sm:"50%",lg:"50%"},width:{md:"100%",xs:"100%",sm:"100%",lg:"100%"},textAlign:{md:"center",xs:"center",sm:"center",lg:"center"},transform:{md:"translateY(-50%)",xs:"translateY(-50%)",sm:"translateY(-50%)",lg:"translateY(-50%)"}}}>
     <Typography variant='h1' sx={{color:{md:"#fff",xs:"#fff",sm:"#fff",lg:"#fff"},letterSpacing:{md:"10px",xs:"10px",sm:"10px",lg:"10px"},fontSize:{md:"70px",xs:"24px",sm:"30px",lg:"70px"}}}>Hussain Enterprises</Typography>
     <Typography variant='p' sx={{pt:{md:"50px",xs:"30px",sm:"30px",lg:"50px"},letterSpacing:{md:"2px",xs:"2px",sm:"2px",lg:"2px"},fontSize:{md:"50px",xs:"12px",lg:"50px",sm:"20px"},color:{md:"#fff",xs:"#fff",sm:"#fff",lg:"#fff"}}}>Commerceial Cleaning Services Human Resource Management</Typography>
    </Stack>
  
    </Stack>
    
  )
}

export default index