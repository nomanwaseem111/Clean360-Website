import React from "react";
import { Stack, Grid, Container, Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import EditLocationIcon from '@mui/icons-material/EditLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const index = () => {
  return (
    <Stack
      display={{ md: "flex", xs: "flex" }}
      justifyContent={{ md: "center", xs: "center" }}
      alignItems={{ md: "center", xs: "center" }}
      mt={{ md: "40px", xs: "40px" }}
      backgroundColor={{ md: "#553216", xs: "#553216" }}
      height={{ md: "500px", xs: "auto" }}
      width={{ md: "100%", xs: "100%" }}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        // border={{ md: "1px solid white", xs: "1px solid white" }}
        height={{ md: "400px", xs: "1420px" }}
        width={{ md: "70%", xs: "90%" }}
 
      >
        <Stack
          // border={{ md: "1px solid red", xs: "1px solid red" }}
          height={{ md: "400px", xs: "1250px" }}
          width={{ md: "25%", xs: "100%" }}
        >
          <Typography
            variant="h6"
            color={{ md: "#fff", xs: "#fff" }}
            mb={{ md: "15px", xs: "15px" }}
            mt={{ md: "40px", xs: "50px" }}
          >
            ABOUT US
          </Typography>
          <hr width="25%" id="hrline2" />
          <Typography
            variant="p"
            mt={{ md: "18px", xs: "18px" }}
            fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
            fontSize={{ md: "16px", xs: "16px" }}
            color={{ md: "#fff", xs: "#fff" }}
            lineHeight={{ md: "24px", xs: "24px" }}
          >
            HE Cleaning Company Service is a fully integrated janitorial
            cleaning services company that's Provide Comprehensive, high
            quality, reliable cleaning Solutions to Commerceial corporate,
            industrial and residential client, We pride ourselves on making our
            management accountable to the client through direct access and
            interaction with our
          </Typography>
          <Stack
            mt={{ md: "25px", xs: "25px" }}
            display={{ md: "flex", xs: "flex" }}
            width={{ md: "40%", xs: "40%" }}
            alignItems={{ md: "center", xs: "center" }}
            justifyContent={{ md: "space-around", xs: "space-around" }}
            direction={{ md: "row", xs: "row" }}
          >
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-pinterest-p"></i>
          </Stack>
        </Stack>

        <Stack
          height={{ md: "400px", xs: "1100px" }}
          width={{ md: "25%", xs: "100%" }}
          // border={{ md: "1px solid red", xs: "1px solid red" }}
          paddingLeft={{md:"30px",xs:'0px'}}

        >
          <Typography
            variant="h6"
            color={{ md: "#fff", xs: "#fff" }}
            mb={{ md: "15px", xs: "15px" }}
            mt={{ md: "40px", xs: "50px" }}
          >
            OUR SERVICES
          </Typography>
          <hr width="25%" id="hrline2" />
          <Stack>
            <Box
              mt={{ md: "20px",xs:"20px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontSize: { md: "16px", xs: "16px" },
                fontFamily: { md: "sans-serif", xs: "sans-serif" },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: { md: "#fff", xs: "#fff" },
                  fontSize: { md: "15px",xs:"12px" },
                  marginRight: { md: "8px",xs:"8px" },
                }}
              />
              After Builders Cleaning
            </Box>
            <Box
              mt={{ md: "20px",xs:"20px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontSize: { md: "16px", xs: "16px" },
                fontFamily: { md: "sans-serif", xs: "sans-serif" },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: { md: "#fff", xs: "#fff" },
                  fontSize: { md: "15px",xs:"12px" },
                  marginRight: { md: "8px",xs:"8px" },
                }}
              />
              Blinds Cleaning
            </Box>
            <Box
              mt={{ md: "20px",xs:"20px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontSize: { md: "16px", xs: "16px" },
                fontFamily: { md: "sans-serif", xs: "sans-serif" },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: { md: "#fff", xs: "#fff" },
                  fontSize: { md: "15px",xs:"12px" },
                  marginRight: { md: "8px",xs:"8px" },
                }}
              />
              Carpets Cleaning
            </Box>
            <Box
              mt={{ md: "20px",xs:"20px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontSize: { md: "16px", xs: "16px" },
                fontFamily: { md: "sans-serif", xs: "sans-serif" },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: { md: "#fff", xs: "#fff" },
                  fontSize: { md: "15px",xs:"12px" },
                  marginRight: { md: "8px",xs:"8px" },
                }}
              />
              Office Cleaning
            </Box>
            <Box
              mt={{ md: "20px",xs:"20px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontSize: { md: "16px", xs: "16px" },
                fontFamily: { md: "sans-serif", xs: "sans-serif" },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: { md: "#fff", xs: "#fff" },
                  fontSize: { md: "15px",xs:"12px" },
                  marginRight: { md: "8px",xs:"8px" },
                }}
              />
              Masjid Cleaning
            </Box>
            <Box
              mt={{ md: "20px",xs:"20px" }}
              sx={{
                color: { md: "#fff", xs: "#fff" },
                fontSize: { md: "16px", xs: "16px" },
                fontFamily: { md: "sans-serif", xs: "sans-serif" },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: { md: "#fff", xs: "#fff" },
                  fontSize: { md: "15px",xs:"12px" },
                  marginRight: { md: "8px",xs:"8px" },
                }}
              />
              Commercial Cleaning
            </Box>
          </Stack>
        </Stack>

        <Stack
          height={{ md: "400px", xs: "400px" }}
          width={{ md: "25%", xs: "100%" }}
          // border={{ md: "1px solid red", xs: "1px solid red" }}

        >
          <Typography
            variant="h6"
            color={{ md: "#fff", xs: "#fff" }}
            mb={{ md: "15px", xs: "15px" }}
            mt={{ md: "40px", xs: "50px" }}
          >
            RECENT POST
          </Typography>
          <hr width="25%" id="hrline2" />
          <Stack mt={{md:"25px",xs:"25px"}} direction={{md:"row",xs:"row"}} display={{md:"flex",xs:"flex"}} justifyContent={{md:"space-around",xs:"space-around"}} alignItems={{md:'center',xs:'center'}} flexWrap={{md:"wrap",xs:"wrap"}} height={{md:"300px",xs:"300px"}} >
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img1}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img2}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img3}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img4}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img5}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img6}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img7}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img8}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img9}/>

          </Stack>
        </Stack>

        <Stack
          height={{ md: "400px", xs: "800px" }}
          width={{ md: "25%", xs: "100%" }}
          // border={{ md: "1px solid red", xs: "1px solid red" }}
          paddingLeft={{md:"10px",xs:'0px'}}

        >
           <Typography
            variant="h6"
            color={{ md: "#fff", xs: "#fff" }}
            mb={{ md: "15px", xs: "15px" }}
            mt={{ md: "40px", xs: "50px" }}
          >
            CONTACT US
          </Typography>
          <hr width="25%" id="hrline2" />
          <Stack mt={{md:"23px",xs:"25px"}} height={{md:"100%",xs:"100%"}} width={{md:"100%",xs:"100%"}}>
           <Stack direction={{md:"row",xs:'row'}}  height={{md:"30%",xs:"40%"}} width={{md:"100%",xs:"100%"}}>
            <Stack  width={{md:"120px",xs:"120px"}}>
            <EditLocationIcon sx={{color:{md:"#fff",xs:"#fff"},marginLeft:{md:"20px",xs:"20px"},fontSize:{md:"30px",xs:"30px"}}} />
            </Stack>
             <Stack>
             <Typography variant="h6" color={{md:"#fff",xs:'#fff'}} fontSize={{md:"18px",xs:'18px'}} fontFamily={{md:"sans-serif",xs:"sans-serif"}}>ADDRESS</Typography>
              <Typography variant="p" color={{md:"#fff",xs:'#fff'}} fontSize={{md:"15px",xs:'15px'}} fontFamily={{md:"sans-serif",xs:"sans-serif"}}>demo address #8901 Marmora Road Chi Minh City, Vietnam</Typography>
             </Stack>
           </Stack>   
           <Stack mt={{md:"23px",xs:"25px"}} direction={{md:"row",xs:'row'}}  height={{md:"30%",xs:"40%"}} width={{md:"100%",xs:"100%"}}>
           <Stack  width={{md:"80px",xs:"80px"}}>
            <LocalPhoneIcon sx={{color:{md:"#fff",xs:"#fff"},marginLeft:{md:"20px",xs:"20px"},fontSize:{md:"30px",xs:"30px"}}} />
            </Stack>
             <Stack>
             <Typography variant="h6" color={{md:"#fff",xs:'#fff'}} fontSize={{md:"18px",xs:'18px'}} fontFamily={{md:"sans-serif",xs:"sans-serif"}}>PHONE</Typography>
              <Typography variant="p" color={{md:"#fff",xs:'#fff'}} fontSize={{md:"15px",xs:'15px'}} fontFamily={{md:"sans-serif",xs:"sans-serif"}}>1234-567890 (24/7 Support Line)</Typography>
             </Stack>
           </Stack>   

          </Stack>
        </Stack>
      </Stack>

  
    </Stack>
  );
};

export default index;
