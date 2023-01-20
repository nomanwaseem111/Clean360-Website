import { Typography, Button, Box, Stack } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const index = () => {
  return (
    <>
      <Carousel showArrows={true} dynamicHeight={true} showThumbs={false}>
        <Stack>
          <Box
            component="img"
            alt=""
            src="https://clean360.dexignlab.com/xhtml/images/main-slider/slide4.jpg"
            sx={{
              height: { xs: "380px", md: "899px" },
              width: { md: "100%", xs: "100%" },
              zIndex: { md: "1", xs: "1" },
            }}
          />
          <Stack
            sx={{
              zIndex: { md: "2", xs: "2" },
              position: { md: "absolute", xs: "absolute" },
              top: { md: "240px", xs: "100px" },
              left: { md: "580px" },
              color: { md: "#fff", xs: "#fff" },
              display: { md: "flex", xs: "flex" },
              justifyContent: { md: "center", xs: "center" },
              alignItems: { md: "center", xs: "center" },
            }}
          >
            <div className="banner-inner">
              <Typography
                variant="h1"
                sx={{
                  width: { md: "600px", xs: "200px" },
                  flexWrap: { md: "wrap", xs: "wrap" },
                  fontSize: { md: "60px", xs: "16px" },
                  margin: { md: "auto", xs: "auto" },
                  display: { md: "flex", xs: "flex" },
                  justifyContent: { md: "center", xs: "center" },
                  mb: { xs: "20px", md: "0px" },
                  alignItems: { md: "center", xs: "center" },
                  letterSpacing: { md: "10px", xs: "1px" },
                  lineHeight: { md: "70px", xs: "25px" },
                }}
              >
                PEST CONTROL SERVICES
              </Typography>
              <Typography
                variant="p"
                sx={{
                  width: { md: "800px", xs: "150px" },
                  flexWrap: { md: "wrap", xs: "wrap" },
                  fontSize: { md: "19px", xs: "8px" },
                  margin: { md: "auto" },
                  display: { md: "flex" },
                  justifyContent: { md: "center" },
                  alignItems: { md: "center" },
                  mt: { md: "30px", xs: "0px" },
                  letterSpacing: { md: "1px", xs: "1px" },
                  lineHeight: { md: "40px", xs: "20px" },
                  fontFamily: { md: "sans-serif", xs: "sans-serif" },
                }}
              >
                Post-ironic authentic drinking vinegar chambray quinoa. VHS
                letterpress sriracha, tacos skateboard migas farm-to-table
                artisan kombucha.
              </Typography>
            </div>
            <Button
              variant="outlined"
              sx={{
                width: { md: "120px", xs: "80px" },
                fontSize: { md: "14px", xs: "7px" },
                fontWeight: { md: "600", xs: "600" },
                border: { md: "none", xs: "none" },
                mt: { md: "30px", xs: "10px" },
                background: { md: "#fff", xs: "#fff" },
                color: { md: "#000", xs: "#000" },
                "&:hover": {
                  backgroundColor: "#fff",

                  color: "#000",
                  border: "none",
                },
              }}
            >
              Read More
            </Button>
          </Stack>
        </Stack>
        {/* <Stack>
          <Box
            component="img"
            alt=""
            src="https://clean360.dexignlab.com/xhtml/images/main-slider/slide4.jpg"
            sx={{
              height: { xs: "350px", md: "899px" },
              width: { md: "100%", xs: "100%" },
              zIndex: { md: "1" },
            }}
          />
          <Stack
            sx={{
              zIndex: { md: "2" },
              position: { md: "absolute", xs: "absolute" },
              top: { md: "240px", xs: "100px" },
              left: { md: "580px" },
              color: { md: "#fff", xs: "#fff" },
              display: { md: "flex", xs: "flex" },
              justifyContent: { md: "center", xs: "center" },
              alignItems: { md: "center", xs: "center" },
            }}
          >
            <div className="banner-inner">
              <Typography
                variant="h1"
                sx={{
                  width: { md: "600px", xs: "200px" },
                  flexWrap: { md: "wrap", xs: "wrap" },
                  fontSize: { md: "60px", xs: "16px" },
                  margin: { md: "auto", xs: "auto" },
                  display: { md: "flex", xs: "flex" },
                  justifyContent: { md: "center", xs: "center" },
                  mb: { xs: "20px", md: "0px" },
                  alignItems: { md: "center", xs: "center" },
                  letterSpacing: { md: "10px", xs: "1px" },
                  lineHeight: { md: "70px", xs: "25px" },
                }}
              >
                PEST CONTROL SERVICES
              </Typography>
              <Typography
                variant="p"
                sx={{
                  width: { md: "800px", xs: "150px" },
                  flexWrap: { md: "wrap", xs: "wrap" },
                  fontSize: { md: "19px", xs: "8px" },
                  margin: { md: "auto" },
                  display: { md: "flex" },
                  justifyContent: { md: "center" },
                  alignItems: { md: "center" },
                  mt: { md: "30px", xs: "0px" },
                  letterSpacing: { md: "1px", xs: "1px" },
                  lineHeight: { md: "40px", xs: "20px" },
                  fontFamily: { md: "sans-serif", xs: "sans-serif" },
                }}
              >
                Post-ironic authentic drinking vinegar chambray quinoa. VHS
                letterpress sriracha, tacos skateboard migas farm-to-table
                artisan kombucha.
              </Typography>
            </div>
            <Button
              variant="outlined"
              sx={{
                width: { md: "120px", xs: "80px" },
                fontSize: { md: "14px", xs: "7px" },
                fontWeight: { md: "600", xs: "600" },
                border: { md: "none", xs: "none" },
                mt: { md: "30px", xs: "10px" },
                background: { md: "#fff", xs: "#fff" },
                color: { md: "#000", xs: "#000" },
              }}
            >
              Read More
            </Button>
          </Stack>
        </Stack> */}
        <Stack>
          <Box
            component="img"
            alt=""
            src="https://clean360.dexignlab.com/xhtml/images/main-slider/slide5.jpg"
            sx={{
              height: { xs: "380px", md: "899px" },
              width: { md: "100%", xs: "100%" },
              zIndex: { md: "1" },
            }}
          />
          <Stack
            sx={{
              zIndex: { md: "2" },
              position: { md: "absolute", xs: "absolute" },
              top: { md: "240px", xs: "100px" },
              left: { md: "580px" },
              color: { md: "#fff", xs: "#fff" },
              display: { md: "flex", xs: "flex" },
              justifyContent: { md: "center", xs: "center" },
              alignItems: { md: "center", xs: "center" },
            }}
          >
            <div className="banner-inner">
              <Typography
                variant="h1"
                sx={{
                  width: { md: "600px", xs: "200px" },
                  flexWrap: { md: "wrap", xs: "wrap" },
                  fontSize: { md: "60px", xs: "16px" },
                  margin: { md: "auto", xs: "auto" },
                  display: { md: "flex", xs: "flex" },
                  justifyContent: { md: "center", xs: "center" },
                  mb: { xs: "20px", md: "0px" },
                  alignItems: { md: "center", xs: "center" },
                  letterSpacing: { md: "10px", xs: "1px" },
                  lineHeight: { md: "70px", xs: "25px" },
                }}
              >
                PEST CONTROL SERVICES
              </Typography>
              <Typography
                variant="p"
                sx={{
                  width: { md: "800px", xs: "150px" },
                  flexWrap: { md: "wrap", xs: "wrap" },
                  fontSize: { md: "19px", xs: "8px" },
                  margin: { md: "auto" },
                  display: { md: "flex" },
                  justifyContent: { md: "center" },
                  alignItems: { md: "center" },
                  mt: { md: "30px", xs: "0px" },
                  letterSpacing: { md: "1px", xs: "1px" },
                  lineHeight: { md: "40px", xs: "20px" },
                  fontFamily: { md: "sans-serif", xs: "sans-serif" },
                }}
              >
                Post-ironic authentic drinking vinegar chambray quinoa. VHS
                letterpress sriracha, tacos skateboard migas farm-to-table
                artisan kombucha.
              </Typography>
            </div>
            <Button
              variant="outlined"
              sx={{
                width: { md: "120px", xs: "80px" },
                fontSize: { md: "14px", xs: "7px" },
                fontWeight: { md: "600", xs: "600" },
                border: { md: "none", xs: "none" },
                mt: { md: "30px", xs: "10px" },
                background: { md: "#fff", xs: "#fff" },
                color: { md: "#000", xs: "#000" },
              }}
            >
              Read More
            </Button>
          </Stack>
        </Stack>
      </Carousel>
    </>
  );
};

export default index;
