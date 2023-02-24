import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactStars from "react-stars";
import { Typography, Stack } from "@mui/material";

export const ReviewCarousel = ({data}) => (
  <Carousel>
    {data.map((e, i) => {
        console.log("caousel render ",e)
      return (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKPGLF5mjjN-9pH1dezxnhwZ_6GKpPwRHcw&usqp=CAU"
            alt="First slide"
            style={{ background: "red" }}
          />
          <Carousel.Caption>
            <Stack mb={{ md: "100px", sm: "50px" }}>
              <Typography
                mb={{ md: "10px", sm: "30px", xs: "5px" }}
                fontSize={{ md: "50px", sm: "26px", xs: "10px" }}
              >
                {e.name}
              </Typography>
              <Typography
                mb={{ md: "10px", sm: "20px", xs: "0px" }}
                fontSize={{ md: "20px", sm: "18px", xs: "8px" }}
              >
                {e.comment}
              </Typography>
              <Stack
                mt={{ md: "20px", xs: "0px", sm: "0px" }}
                display={{ md: "flex", lg: "flex", sm: "flex", xs: "flex" }}
                justifyContent={{
                  md: "center",
                  lg: "center",
                  sm: "center",
                  xs: "center",
                }}
                alignItems={{
                  md: "center",
                  lg: "center",
                  sm: "center",
                  xs: "center",
                }}
              >
                <ReactStars size={24} edit={false} value={e.rating} />
              </Stack>
            </Stack>
          </Carousel.Caption>
        </Carousel.Item>
      );
    })}
  </Carousel>
);
