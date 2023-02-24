import React, { forwardRef, useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Typography, Stack } from "@mui/material";
import { reviewRef } from "../../firebase/firebase";
import { getDocs } from "firebase/firestore";
import Carousel from 'react-bootstrap/Carousel';
import ReactStars from "react-stars";


const Review = (props, ref) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("data:", data);
  useEffect(() => {
    setLoading(true)
    async function getData() {
      let arr = [];
      const _data = await getDocs(reviewRef);
      _data.forEach((doc) => {
        arr.push(doc.data());
      });
      setData(arr);
      setLoading(false)

    }
    getData();
  }, []);

  return (
    <>
     <Stack >
       <Typography variant='h3'   color={{ md: "#f7941d", xs: "#f7941d" }}
            fontWeight={{ md: "800", xs: "800" }}
            textAlign={{ md: "center", xs: "center" }}
            mb={{md:'40px',xs:'40px'}}
            fontSize={{ md: "50px", xs: "30px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
            >Reviews</Typography>
      
      
      </Stack>   
       <Stack  mb={{md:'100px'}}>
   <Stack width={{md:"50%"}} display={{md:"flex"}} justifyContent={{md:"center"}} alignItems={{md:"center"}} margin={{md:'auto'}}> 
    <Carousel>
  
  {

      data.map((e,i) => {
        return(
     
          <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKPGLF5mjjN-9pH1dezxnhwZ_6GKpPwRHcw&usqp=CAU"
        alt="First slide"
        style={{background:"red"}}
     
      />
      <Carousel.Caption>
      <Stack mb={{md:"100px",sm:"50px"}}>
        <Typography mb={{md:"10px",sm:"30px",xs:"5px"}} fontSize={{md:'50px',sm:"26px",xs:"10px"}}>{e.name}</Typography>
        <Typography mb={{md:"10px",sm:"20px",xs:"0px"}} fontSize={{md:'20px',sm:"18px",xs:'8px'}}>{e.comment}</Typography>
         <Stack mt={{md:"20px",xs:"0px",sm:"0px"}} display={{md:"flex",lg:"flex",sm:"flex",xs:'flex'}} justifyContent={{md:"center",lg:"center",sm:"center",xs:'center'}} alignItems={{md:"center",lg:"center",sm:"center",xs:'center'}}>
         <ReactStars size={24} edit={false} value={e.rating}/>
         </Stack>
        </Stack>
      </Carousel.Caption>
    </Carousel.Item>

        )
      })

  }



   
  </Carousel>
</Stack>
</Stack>
</>
  );
};

export default forwardRef(Review);