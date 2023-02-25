import React, { forwardRef } from "react";
import { Stack, Grid, Container, Typography } from "@mui/material";
import Fade from 'react-reveal/Fade';



const index = (props,ref) => {
  return (
    <Grid
      sx={{ height: { md: "700px", xs: "1400px",sm:"1400px",lg:"700px" },width:{md:"100%"} }}
      id="banner"
      // backgroundColor={{ md: "red", xs: "red",sm:"red" }}
      mt={{md:"0px",xs:"65px",sm:"65px"}}
     
      // backgroundColor={{ md: "red", xs: "red" }}
      
    >

 
      <Container ref={ref} maxWidth="xl" width={{ xs: "100%" }}>
        
       <Fade right duration={1500}>        
        <Stack>
          <Typography
            variant="h3"
            color={{ md: "#f7941d", xs: "#f7941d" }}
            fontWeight={{ md: "800", xs: "800" }}
            textAlign={{ md: "center", xs: "center" }}
            mt={{ md: "50px", xs: "50px" }}
            fontSize={{ md: "50px", xs: "30px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
          >
            Our Values
          </Typography>

          <Typography
            variant="p"
            color={{ md: "#000", xs: "#000" }}
            textAlign={{ md: "center", xs: "center" }}
            mt={{ md: "40px", xs: "40px" }}
            fontSize={{ md: '26px', xs: "12px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
          >
            Our Goal is your Satisfaction (of course after our Cleaning work)
          </Typography>
        </Stack>
        <Stack
          direction={{ md: "row", xs: "column" }}
          width={{ md: "1300px" }}
          margin={{ md: "auto",xs:"auto" }}
          display={{ md: "flex", xs: "flex" }}
          flexWrap={{ md: "wrap", xs: "wrap" }}
          pt={{ md: "30px", xs: "20px" }}
          justifyContent={{ md: "space-evenly", xs: "space-around" }}
          alignContent={{ md: "center", xs: "center" }}
        >
          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "100%" },
              height: "350px",
              xs: "300px",
              background: { md: "#fff", xs: "#fff" },
              // background:{md:"green",xs:"green"}
              boxShadow:{md:"1px 1px 10px 2px grey",xs:"1px 1px 10px 2px grey"}

            }}
          >
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
              {/* <HomeIcon
                sx={{
                  fontSize: { md: "52px", xs: "52px" },
                  margin: { md: "auto", xs: "auto" },
                  marginBottom: { md: "10px", xs: "10px" },
                }}
              /> */}
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                sx={{
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center", xs: "center" },
                  // border:{md:"1px solid red",xs:"1px solid red"},
                  width: { md: "300px", xs: "300px" },
                  margin: { md: "auto", xs: "auto" },
                  display: { md: "flex", xs: "flex" },
                  justifyContent: { md: "center", xs: "center" },
                  alignItems: { md: "center", xs: "center" },
                  flexwrap: { md: "wrap", xs: "wrap" },
                  fontSize:{md:"1.5rem",xs:"1.4rem"},
                  mt:{md:"40px",xs:"40px",lg:"40px",sm:"40px"}

                }}
                fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
              >
                Eco-Friendly Oriented
              </Typography>
              <Typography
                variant="p"
                fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
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
                We Carefully choose the best and the most natural Cleaning
                Products that give amazing result.
              </Typography>
            </Stack>
          </Stack>

          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "100%" },
              height: "350px",
              xs: "300px",
              background: { md: "#fff", xs: "#fff" },
              // background:{md:"green",xs:"green"},
              boxShadow:{md:"1px 1px 10px 2px grey",xs:"1px 1px 10px 2px grey"}
            }}
          >
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
              {/* <HomeIcon
                sx={{
                  fontSize: { md: "52px", xs: "52px" },
                  margin: { md: "auto", xs: "auto" },
                  marginBottom: { md: "10px", xs: "10px" },
                }}
              /> */}
            </Stack>
            <Stack >
              <Typography
                variant="h5"
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center", xs: "center" },
                  // border:{md:"1px solid red",xs:"1px solid red"},
                  margin: { md: "auto", xs: "auto" },
                  display: { md: "flex", xs: "flex" },
                  justifyContent: { md: "center", xs: "center" },
                  alignItems: { md: "center", xs: "center" },
                  flexwrap: { md: "wrap", xs: "wrap" },
                  fontSize:{md:"1.5rem",xs:"1.4rem"},
                  mt:{md:"40px",xs:"40px",lg:"40px",sm:"40px"}

                }}
                fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
              >
                Excellence & Innovation
              </Typography>
              <Typography
                variant="p"
                fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
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
                We Provide training to our personal in the order to ensure the
                high standard of service we stay up-to-date on the lastest
                Innovation in eco-friendly Products and technologies, allowing
                us to bring the best into our clients home.
              </Typography>
            </Stack>
          </Stack>

          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "100%" },
              height: "350px",
              xs: "300px",
              background: { md: "#fff", xs: "#fff" },
              // background:{md:"green",xs:"green"}
              boxShadow:{md:"1px 1px 10px 2px grey",xs:"1px 1px 10px 2px grey"}

            }}
          >
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
              {/* <HomeIcon
                sx={{
                  fontSize: { md: "52px", xs: "52px" },
                  margin: { md: "auto", xs: "auto" },
                  marginBottom: { md: "10px", xs: "10px" },
                }}
              /> */}
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center", xs: "center" },
                  // border:{md:"1px solid red",xs:"1px solid red"},
                  margin: { md: "auto", xs: "auto" },
                  display: { md: "flex", xs: "flex" },
                  justifyContent: { md: "center", xs: "center" },
                  alignItems: { md: "center", xs: "center" },
                  flexwrap: { md: "wrap", xs: "wrap" },
                  fontSize:{md:"1.5rem",xs:"1.4rem"},
                  mt:{md:"40px",xs:"40px",lg:"40px",sm:"40px"}

                }}
                fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
              >
                Expansion / Growth
              </Typography>
              <Typography
                variant="p"
                fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
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
                We make ourselves known in the community we create long term
                relations, while constantly expanding, Therefore we are always
                bringing in more people to work for us.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        </Fade>
      </Container>
    </Grid>
  );
};

export default forwardRef(index) ;
