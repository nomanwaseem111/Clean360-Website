import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Typography, Button, Box, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";


const index = () => {
  
   
    return (
      <>
      <Stack display={{md:'flex',xs:"flex"}} height={{md:"700px",xs:"600px"}} backgroundColor={{md:"#ced4da",xs:"#ced4da"}} justifyContent={{md:"center",xs:'center'}} alignItems={{md:"center",xs:"center"}}>
        
      <Stack>
          <Typography
            variant="h3"
            color={{ md: "#f7941d", xs: "#f7941d" }}
            fontWeight={{ md: "800", xs: "800" }}
            textAlign={{ md: "center", xs: "center" }}
            fontSize={{ md: "50px", xs: "30px" }}
            mb={{md:"80px",xs:"50px"}}
          >
            Our Services
          </Typography>
        </Stack>

        <Stack  sx={{width:{md:"80%",xs:"90%"},height:{md:"auto",xs:'auto'},background:{md:"#fff",xs:'#fff'}}} >

        <Slide >
          
            <Stack display={{md:"flex",xs:"flex"}}   justifyContent={{md:"space-around",xs:"center"}} alignItems={{md:"center",xs:'center'}} flexDirection={{md:"row",xs:"row"}} key={index} >
              <Stack width={{md:"100%",xs:"100%"}} height={{md:"400px",xs:"300px"}} backgroundColor={{md:"#fff",xs:"#fff"}}>
              <Stack
              width={{ md: "100%", xs: "100%" }}
              mt={{ md: "30px", xs: "30px" }}
            >
              {/* <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              /> */}
              <HomeIcon
                sx={{
                  fontSize: { md: "52px", xs: "52px" },
                  margin: { md: "auto", xs: "auto" },
                }}
              />
            </Stack>
              <Typography
                variant="h5"
                mt={{ md: "30px", xs: "30px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center", xs: "center" },
                  fontSize:{md:"1.5rem",xs:"1.4rem"}

                }}
              >
                Builders Cleaning
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "10px", xs: "10px" }}
                color={{ md: "#6c757d", xs: "#6c757d" }}
                mb={{ md: "20px", xs: "20px" }}
                lineHeight={{ md: "28px", xs: "25px" }}
                sx={{
                  fontSize: { md: "16px", xs: "14px" },
                  width: { md: "80%", xs: "80%" },
                  height: { md: "auto", xs: "auto" },
                  textAlign: { md: "center", xs: "center" },
                  marginLeft: { md: "10%", xs: "10%" },
                }}
              >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Typography>
              </Stack>
            
            

             



             
            </Stack>
        
          

        


        </Slide>
      </Stack>
      </Stack>
      </>
  )
}

export default index
