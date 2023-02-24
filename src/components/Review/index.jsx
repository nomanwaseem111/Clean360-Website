import React, { forwardRef, useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Typography, Stack } from "@mui/material";
import {  dbRef } from "../../firebase/firebase";
import {  child, get } from "firebase/database";
import { ReviewContext } from "../../hook/reviewContext";
import { useContext } from "react";
import { ReviewCarousel } from "../Carousel";

const Review = (props, ref) => {
  const {review} = useContext(ReviewContext)

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("data:", data);
  useEffect(() => {
    setLoading(true)
    async function getData() {
      get(child(dbRef,`reviews`)).then((snapshot) => {
        if(snapshot.exists()){
          console.log("data available ------ ",snapshot.val())
        }else{
          console.log("no data available")
        }
      }).catch((err) => {
        console.error(err)
      })
     

      // const _data = await getDocs(reviewRef);
      // _data.forEach((doc) => {
      //   arr.push(doc.data());
      // });
      // setData(arr);
      setLoading(false)

    }
    getData();
  }, []);


  
  // useEffect(() => {
  //   setLoading(true)
  //   let arr = data;
  //   arr.push(review)
  //   setData(arr)
  //   setLoading(false)

  //   console.log("data ----------- ",data)
  // },[review])

  return (
    <>
     <Stack  >
       <Typography variant='h3'   color={{ md: "#f7941d", xs: "#f7941d" }}
            fontWeight={{ md: "800", xs: "800" }}
            textAlign={{ md: "center", xs: "center" }}
            mb={{md:'40px',xs:'40px'}}
            fontSize={{ md: "50px", xs: "30px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
            >Reviews</Typography>
      
      
      </Stack>   
       <Stack  mb={{md:'100px',xs:"50px"}}>
   <Stack width={{md:"50%"}} display={{md:"flex"}} justifyContent={{md:"center"}} alignItems={{md:"center"}} margin={{md:'auto'}}> 
     {
        data.length ? <ReviewCarousel data={data} /> : 
        <Stack border={{md:"1px solid red",xs:"1px solid red",sm:"1px solid red"}} height={{md:"400px",xs:"200px",sm:"300px"}} textAlign={{md:'center',sm:"center",xs:"center"}} fontSize={{md:"30px"}}>
        No Review
        </Stack>
     }

</Stack>
</Stack>
</>
  );
};

export default forwardRef(Review);