import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Typography,  Stack } from "@mui/material";
import Fade from "react-reveal/Fade";

const index = () => {
  return (
    <>
      
        <Stack
          direction={{ md: "row", xs: "row" }}
          backgroundColor={{ md: "#fff", xs: "#fff" }}
          mb={{ md: "100px", xs: "200px" }}
          display={{ md: "flex", xs: "flex" }}
          mt={{ md: "80px", xs: "80px" }}
          justifyContent={{ md: "space-around", xs: "center" }}
          flexWrap={{ md: "wrap", xs: "wrap" }}
          width={{ md: "100%", xs: "100%" }}
          height={{ md: "500px", xs: "800px" }}
        >
          <Stack
            backgroundColor={{ md: "#fff", xs: "#fff" }}
            padding={{ md: "20px", xs: "20px" }}
            width={{ md: "40%", xs: "95%" }}
            height={{ md: "400px", xs: "400px" }}
          >
            <Typography
              variant="h3"
              fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
              fontWeight={{ md: "700", xs: "700" }}
              sx={{
                color: { md: "#000", xs: "#000" },
                fontSize: { md: "50px", xs: "30px" },
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: { md: "#f7941d", xs: "#f7941d" },
                mt: { md: "20px", xs: "20px" },
                fontSize: { md: "30px", xs: "20px" },
              }}
            >
              More than 15 years of Cleaning Service
            </Typography>
            <Typography
              variant="p"
              lineHeight={{ md: "40px", xs: "25px" }}
              sx={{
                color: { md: "#000", xs: "#000" },
                mt: { md: "20px", xs: "20px" },
                fontSize: { md: "26px", xs: "18px" },
                fontFamily: { md: "Roboto", xs: "Roboto" },
              }}
            >
              {" "}
              HE Cleaning Company Service is a fully integrated janitorial
              cleaning services company that's Provide Comprehensive, high
              quality, reliable cleaning Solutions to Commerceial corporate,
              industrial and residential client, We pride ourselves on making
              our management accountable to the client through direct access and
              interaction with our
            </Typography>
          </Stack>

          <Stack
            mt={{ md: "0px", xs: "30px" }}
            backgroundColor={{ md: "#fff", xs: "#fff" }}
            width={{ md: "40%", xs: "100%" }}
            height={{ md: "400px", xs: "500px" }}
          >
            <Stack
              margin={{ xs: "auto", md: "justify" }}
              padding={{ md: "20px", xs: "20px" }}
              width={{ md: "100%", xs: "95%" }}
              height={{ md: "200px", xs: "240px" }}
            >
              <Typography
                variant="h4"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                fontWeight={{ md: "700", xs: "700" }}
                sx={{ md: "30px", xs: "20px" }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="p"
                lineHeight={{ md: "30px", xs: "30px" }}
                sx={{
                  fontSize: { md: "24px", xs: "20px" },
                  pt: { md: "20px", xs: "10px" },
                  fontFamily: { md: "sans-serif", xs: "sans-serif" },
                }}
              >
                Aims to be a national market leader in the provision of clean
                service delivering, reliable,quality,cost effective cleaning
                Solutions for our customers.
              </Typography>
            </Stack>
            <Stack
              mt={{ md: "30px", xs: "30px" }}
              padding={{ md: "20px", xs: "20px" }}
              margin={{ xs: "auto", md: "justify" }}
              width={{ md: "100%", xs: "95%" }}
              height={{ md: "200px", xs: "240px" }}
            >
              <Typography
                variant="h4"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                fontWeight={{ md: "700", xs: "700" }}
                sx={{ md: "30px", xs: "20px" }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="p"
                lineHeight={{ md: "30px", xs: "30px" }}
                sx={{
                  fontSize: { md: "24px", xs: "20px" },
                  pt: { md: "20px", xs: "10px" },
                  fontFamily: { md: "sans-serif", xs: "sans-serif" },
                }}
              >
                Hussain Enterprise can be a chore and we know you have many
                choices when you consider hiring a maid service. All of them are
                committed to the same common values and principle.
              </Typography>
            </Stack>
            <Stack></Stack>
          </Stack>
        </Stack>
      
    </>
  );
};

export default index;
