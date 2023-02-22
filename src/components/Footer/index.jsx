import React, { forwardRef } from "react";
import { Stack,  Box, Typography } from "@mui/material";
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

const index = (props,ref) => {
  return (
    <Stack  ref={ref}
      display={{ md: "flex", xs: "flex" }}
      justifyContent={{ md: "center", xs: "center" }}
      alignItems={{ md: "center", xs: "center" }}
      backgroundColor={{ md: "#553216", xs: "#553216" }}
      height={{ md: "500px", xs: "auto" }}
      width={{ md: "100%", xs: "100%" }}
    >
      <Stack 
        direction={{ md: "row", xs: "column" }}
        height={{ md: "400px", xs: "1620px" }}
        width={{ md: "85%", xs: "90%",lg:"68%" }}
        // border={{md:"1px solid #ffff",xs:'1px solid white'}}
        marginBottom={{md:'50px'}}
      >
        <Stack
          height={{ md: "400px", xs: "1250px" }}
          width={{ md: "25%", xs: "100%" }}
        >
          <Typography
            variant="h6"
            color={{ md: "#fff", xs: "#fff" }}
            mb={{ md: "15px", xs: "15px" }}
            mt={{ md: "40px", xs: "50px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
          >
            ABOUT US
          </Typography>
          <hr width="25%" id="hrline2" />
          <Typography
            variant="p"
            mt={{ md: "18px", xs: "18px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
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
            {/* <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-pinterest-p"></i> */}
          </Stack>
        </Stack>

        <Stack
          height={{ md: "400px", xs: "1100px" }}
          width={{ md: "25%", xs: "100%" }}
          paddingLeft={{md:"20px",xs:'0px'}}

        >
          <Typography
            variant="h6"
            color={{ md: "#fff", xs: "#fff" }}
            mb={{ md: "15px", xs: "15px" }}
            mt={{ md: "40px", xs: "50px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
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
                fontFamily: { md: "Eudoxus Sans", xs: "Eudoxus Sans" },
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
                fontFamily: { md: "Eudoxus Sans", xs: "Eudoxus Sans" },
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
                fontFamily: { md: "Eudoxus Sans", xs: "Eudoxus Sans" },
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
                fontFamily: { md: "Eudoxus Sans", xs: "Eudoxus Sans" },
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
                fontFamily: { md: "Eudoxus Sans", xs: "Eudoxus Sans" },
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
                fontFamily: { md: "Eudoxus Sans", xs: "Eudoxus Sans" },
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
          height={{ md: "400px", xs: "1200px" }}
          width={{ md: "25%", xs: "100%",sm:"45%" }}
          
        >
          <Typography
            variant="h6"
            color={{ md: "#fff", xs: "#fff" }}
            mb={{ md: "15px", xs: "15px" }}
            mt={{ md: "40px", xs: "50px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
          >
            RECENT POST
          </Typography>
          <hr width="25%" id="hrline2" />
          <Stack mt={{md:"25px",xs:"25px"}} w direction={{md:"row",xs:"row"}} display={{md:"flex",xs:"flex"}} justifyContent={{md:"space-around",xs:"space-around"}} alignItems={{md:'center',xs:'center'}} flexWrap={{md:"wrap",xs:"wrap"}} height={{md:"300px",xs:"300px"}} >
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img1}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img2}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} src={img3}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} mt={{xs:"10px",md:"0px",lg:"0px",sm:"10px"}} src={img4}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} mt={{xs:"10px",md:"0px",lg:"0px",sm:"10px"}} src={img5}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} mt={{xs:"10px",md:"0px",lg:"0px",sm:"10px"}} src={img6}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} mt={{xs:"10px",md:"0px",lg:"0px",sm:"10px"}} src={img7}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} mt={{xs:"10px",md:"0px",lg:"0px",sm:"10px"}} src={img8}/>
          <Box component="img" width={{md:"100px",xs:"100px"}} height={{md:"80px",xs:"100px"}} mt={{xs:"10px",md:"0px",lg:"0px",sm:"10px"}} src={img9}/>

          </Stack>
        </Stack>

        <Stack
          height={{ md: "400px", xs: "1200px" }}
          width={{ md: "25%", xs: "100%" }}
          paddingLeft={{md:"10px",xs:'0px'}}

        >
           <Typography
            variant="h6"
            color={{ md: "#fff", xs: "#fff" }}
            mb={{ md: "15px", xs: "15px" }}
            mt={{ md: "40px", xs: "50px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
          >
            CONTACT US
          </Typography>
          <hr width="25%" id="hrline2" />
          <Stack mt={{md:"23px",xs:"25px"}} height={{md:"100%",xs:"100%"}} width={{md:"100%",xs:"100%"}}>
           <Stack   direction={{md:"row",xs:'row'}}  height={{md:"30%",xs:"40%"}} width={{md:"100%",xs:"100%"}}>
            <Stack   width={{md:"180px",xs:"180px",sm:"80px"}}>
            <EditLocationIcon sx={{color:{md:"#fff",xs:"#fff"},marginLeft:{md:"20px",xs:"20px"},fontSize:{md:"30px",xs:"30px"}}} />
            </Stack>
             <Stack>
             <Typography variant="h6" color={{md:"#fff",xs:'#fff'}} fontSize={{md:"18px",xs:'18px'}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}>ADDRESS</Typography>
              <Typography variant="p" color={{md:"#fff",xs:'#fff'}} fontSize={{md:"15px",xs:'15px'}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}>D.H.A Phase II Extension Phase 2 Commercial Area Defence Housing Authority,Karachi</Typography>
             </Stack>
           </Stack>   
           <Stack mt={{md:"23px",xs:"25px"}} direction={{md:"row",xs:'row'}}  height={{md:"30%",xs:"40%"}} width={{md:"100%",xs:"100%"}}>
           <Stack  width={{md:"80px",xs:"80px"}}>
            <LocalPhoneIcon sx={{color:{md:"#fff",xs:"#fff"},marginLeft:{md:"20px",xs:"20px"},fontSize:{md:"30px",xs:"30px"}}} />
            </Stack>
             <Stack>
             <Typography variant="h6" color={{md:"#fff",xs:'#fff'}} fontSize={{md:"18px",xs:'18px'}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}>PHONE</Typography>
              <Typography variant="p" color={{md:"#fff",xs:'#fff'}} fontSize={{md:"15px",xs:'15px'}} mt={{md:'15px',xs:'15px'}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}>+922135311335 (24/7 Support Line)</Typography>
              <Typography variant="p" color={{md:"#fff",xs:'#fff'}} fontSize={{md:"15px",xs:'15px'}} mt={{md:'15px',xs:'15px'}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}>+922135311334 (24/7 Support Line)</Typography>

             </Stack>
           </Stack>   

          </Stack>
        </Stack>
      </Stack>

  
    </Stack>
  );
};

export default forwardRef(index);
