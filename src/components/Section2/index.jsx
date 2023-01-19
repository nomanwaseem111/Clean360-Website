import React from 'react'
import { Stack, Grid, Container, Box, Typography, Button } from "@mui/material";
import { textAlign } from '@mui/system';

const index = () => {
  return (
    <Stack display={{md:"flex",xs:"flex"}} justifyContent={{md:"center",xs:'center'}} alignItems={{md:'center',xs:'center'}} sx={{background:{md:"#553216",xs:"#553216"},opacity:{md:'0.9',xs:"0.9"},width:{md:"100%",xs:"100%"},height:{md:"500px",xs:"auto"}}}>
       <Stack sx={{border:{md:'1px solid black',xs:"1px solid black"},width:{md:"70%",xs:"100%"},height:{md:"450px",xs:"450px"}}}>
          <Stack>
           <Typography variant='h3' sx={{color:{md:"#fff",xs:"#fff"},fontWeight:{md:"700",xs:"700"},fontSize:{md:"38px",xs:"38px"},textAlign:{md:"center",xs:'center'}}}>HISTORY OF CLEAN360°</Typography>
          </Stack>
          <hr style={{width:"7%",marginLeft:"47%" ,marginTop:"30px"}} />
       </Stack>
    </Stack>
  )
}

export default index
