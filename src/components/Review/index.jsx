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
      unsubscribe()
     }

  }, []);

  return (
    <Stack
      ref={ref}
      width={{ md: "100%", xs: "100%" }}
      display={{ md: "flex", xs: "flex" }}
      justifyContent={{ md: "center", xs: "center" }}
      alignItems={{ md: "center", xs: "center" }}
      height={{ md: "600px", xs: "350px", sm: "600px" }}
      opacity={{ md: "0.5" }}
      mb={{md:"50px"}}
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
        width={{ md: "80%", xs: "100%" }}
        backgroundColor={{ md: "#fff" }}
        className="slide-container"
      >
        <Stack width={{ md: "60%", xs: "100%", sm: "100%" }}>
          <Carousel>
           {
            
           
           
          
              data.map((e, i) => {
                return (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5plKRlrCipFcm4Aq0sZYe7q4z-tjuANTBxw&usqp=CAU"
                      alt="First slide"
                    />

                    <Carousel.Caption key={i}>
                      <Stack mb={{ md: "100px", xs: "1px", sm: "110px" }} >
                        <Typography
                          variant="h5"
                          fontSize={{ md: "26px", xs: "12px", sm: "16px" }}
                        >
                          {e.name}
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize={{ md: "26px", xs: "8px", sm: "12px" }}
                          mt={{ md: "20px", xs: "10px", sm: "20px" }}
                        >
                          {e.comment}
                        </Typography>
                        <Stack
                          mt={{ md: "10px", xs: "10px", sm: "10px" }}
                          display={{ md: "flex", xs: "flex" }}
                          justifyContent={{ md: "center", xs: "center" }}
                          alignItems={{ md: "center", xs: "center" }}
                        >
                          <ReactStars value={e.rating} edit={false} size={20} />
                        </Stack>
                      </Stack>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })
            }
          </Carousel>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default forwardRef(Review);
