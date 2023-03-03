import React, { forwardRef } from "react";
import { Typography, Stack } from "@mui/material";
import ReactStars from "react-stars";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../ReviewForm";
import { collection, query, onSnapshot } from "firebase/firestore";
import Carousel from "react-bootstrap/Carousel";
import "react-slideshow-image/dist/styles.css";

const Review = (props, ref) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let unsubscribe = null;

    const getRealTimeData = async () => {
      const q = query(collection(db, "Review"));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const Review = [];
        querySnapshot.forEach((doc) => {
          Review.push(doc.data());
        });
        setData(Review);
      });
    };
    getRealTimeData();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Stack
      ref={ref}
      width={{ md: "100%", xs: "100%" }}
      display={{ md: "flex", xs: "flex" }}
      justifyContent={{ md: "center", xs: "center" }}
      alignItems={{ md: "center", xs: "center" }}
      height={{ md: "auto", xs: "auto", sm: "auto" }}
      opacity={{ md: "0.5" }}
      mb={{ md: "50px" }}
    >
      <Stack>
        <Typography
          variant="h3"
          color={{ md: "#f7941d", xs: "#f7941d" }}
          fontWeight={{ md: "800", xs: "800" }}
          textAlign={{ md: "center", xs: "center" }}
          mb={{ md: "40px", xs: "20px" }}
          fontSize={{ md: "50px", xs: "30px" }}
          fontFamily={{ md: "Raleway", xs: "Raleway" }}
        >
          Review
        </Typography>
      </Stack>
      <Stack
        display={{ md: "flex", xs: "flex" }}
        justifyContent={{ md: "center", xs: "center" }}
        alignItems={{ md: "center", xs: "center" }}
        width={{ md: "60%", xs: "100%" }}
        backgroundColor={{ md: "#fff" }}
        className="slide-container"
      >
        <Carousel>
         

          {
            data.map((e,i) => {
              return(
                <Carousel.Item>
            <Stack key={i} mb={{md:"0px",xs:"0px"}} height={{md:"400px",xs:"300px"}} 
              className="d-flex flex-column justify-content-center align-items-center w-100"
              style={{
                backgroundImage:
                  'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5plKRlrCipFcm4Aq0sZYe7q4z-tjuANTBxw&usqp=CAU")',
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                
              }}
            >
              <Stack width={{ md: "600px", xs: "70%" }}   >
                <Typography
                  variant="h4"
                  fontFamily={{ md: "Raleway", xs: "Raleway" }}
                  textAlign={{ md: "center", xs: "center" }}
                  color={{ md: "#fff", xs: "#fff" }}
                  mb={{ md: "10px", xs: "10px" }}
                  fontSize={{md:"26px",xs:"20px"}}
                >
                  {e.name}
                </Typography>
                <Typography
                  variant="p"
                  fontFamily={{ md: "Raleway", xs: "Raleway" }}
                  textAlign={{ md: "center", xs: "center" }}
                  color={{ md: "#fff", xs: "#fff" }}
                  fontSize={{md:"20px",xs:"12px"}}

                >
                 {e.comment}
                </Typography>
                <Stack
                          mt={{ md: "10px", xs: "5px", sm: "5px" }}
                          display={{ md: "flex", xs: "flex" }}
                          justifyContent={{ md: "center", xs: "center" }}
                          alignItems={{ md: "center", xs: "center" }}
                        >
                          <ReactStars value={e.rating} edit={false} size={20} />
                        </Stack>
              </Stack>
            </Stack>
         
          </Carousel.Item>
              )
            })
          }
        </Carousel>
      </Stack>
    </Stack>
  );
};

export default forwardRef(Review);
