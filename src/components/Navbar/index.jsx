import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Link } from "react-scroll";
import { useMediaQuery, useTheme, Stack } from "@mui/material";
import Drawer from "../Drawer";
import Logo1 from "../assets/logo1.png";
import { data } from "../../App";

export default function ButtonAppBar() {
  const {
    scrollToSection,
    homeRef,
    whyUsRef,
    servicesRef,
    aboutRef,
    contactRef,
    reviewRef,
  } = React.useContext(data);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // const Home = React.useRef(null)
  // const whyUs = React.useRef(null)
  // const services = React.useRef(null)
  // const about = React.useRef(null)
  // const contact = React.useRef(null)

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //      top: elementRef.current.offsetTop,
  //      behavior:"smooth"
  //   })
  // }

  return (
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: { md: "#fff", xs: "#fff", sm: "#fff" },
          display: { md: "flex" },
          justifyContent: { md: "center" },
          alignItems: { md: "center" },
          height: { md: "80px", xs: "65px" },
          width:{md:"100%"}
        }}
        // border={{md:"1px solid white"}}
      >
        <Toolbar
          className="nav"
          sx={{
            //  border:{md:"1px solid #fff"},
            width: { md: "80%" },
            display: { md: "flex" },
            justifyContent: { md: "space-between" },
            alignItems: { md: "center" },
            flexWrap:{md:"wrap"}
          }}
        >
          <Box
            component="img"
            src={Logo1}
            width={{ md: "150px", xs: "100px", sm: "100px" }}
            // height={{ md: "60px" }}
            mt={{ xs: "5px", md: "0px" }}
          />
          {isMatch ? (
            <>
              <Drawer />
            </>
          ) : (
            <>
              <Stack
                //  border={{md:"1px solid black"}}
                direction={{ md: "row", xs: "column" }}
                display={{ md: "flex", xs: "flex" }}
                justifyContent={{ md: "space-around", xs: "space-around" }}
                alignItems={{ md: "center", xs: "center" }}
                width={{ md: "550px" }}
                flexWrap={{ md: "wrap" }}
              >
                <Box
                  component={Link}
                  onClick={() => scrollToSection(homeRef)}
                  fontFamily={{ md: "Raleway" }}
                  color={{ md: "#694324" }}
                  fontSize={{ md: "17px" }}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#694324",
                     
                    },
                  }}
                >
                  Home{" "}
                </Box>
                <Box
                  component={Link}
                  onClick={() => scrollToSection(whyUsRef)}
                  fontFamily={{ md: "Raleway" }}
                  color={{ md: "#694324" }}
                  fontSize={{ md: "17px" }}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#694324",
                     
                    },
                  }}
                  s
                >
                  Why Us{" "}
                </Box>
                <Box
                  component={Link}
                  onClick={() => scrollToSection(servicesRef)}
                  to="/services"
                  fontFamily={{ md: "Raleway" }}
                  color={{ md: "#694324" }}
                  fontSize={{ md: "17px" }}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#694324",
                     
                    },
                  }}
                >
                  Services{" "}
                </Box>
                <Box
                  component={Link}
                  onClick={() => scrollToSection(reviewRef)}
                  fontFamily={{ md: "Raleway" }}
                  color={{ md: "#694324" }}
                  fontSize={{ md: "17px" }}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#694324",
                     
                    },
                  }}
                >
                  Reviews{" "}
                </Box>
                <Box
                  component={Link}
                  onClick={() => scrollToSection(aboutRef)}
                  to="about"
                  fontFamily={{ md: "Raleway" }}
                  color={{ md: "#694324" }}
                  fontSize={{ md: "17px" }}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#694324",
                     
                    },
                  }}
                >
                  About{" "}
                </Box>
                <Box
                  component={Link}
                  onClick={() => scrollToSection(contactRef)}
                  fontFamily={{ md: "Raleway" }}
                  color={{ md: "#694324" }}
                  fontSize={{ md: "17px" }}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#694324",
                     
                    },
                  }}
                >
                  Contact{" "}
                </Box>

                {/* <
                  label="Home "
                  sx={{
                    color: "#f7941d",
                    // border:{md:"1px solid white"},
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  // component={Link}
                  to="/"
                />
                <Tab
                  label="Why Us"
                  sx={{
                    color: "#000",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/whyus"
                  

                />
                <Tab
                  label="Services "
                  sx={{
                    color: "#000",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/services"
                  

                />

                <Tab
                  label="About Us"
                  sx={{
                    color: "#000",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/about"
                  

                />
                <Tab
                  label="Contact Us "
                  sx={{
                    color: "#000",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/contact"
                  

                /> */}
                {/* <Tab
                  label="Elements "
                  sx={{
                    color: "#000",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/elements"
                  component={Link}
                />
              <SearchIcon   sx={{marginLeft:{md:"10px"},mt:{md:"3px"},fontSize:{md:"10px"},width:{md:"60px"},height:{md:"40px"},background:{md:"#f7941d"},color:{md:"#fff"}}}/> */}

                {/*  */}
                {/* <Tab label="Cart " sx={{color:"black",fontSize:"20px"}} component={Link} to="/cartsection" /> */}
              </Stack>

              {/* <Button   sx={{marginLeft:"auto"}} component={Link} to="/login" variant="contained"><LoginIcon/></Button> */}

              {/* <Typography component={Link} to='/login' sx={{color:"black",ml:"auto" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><LoginIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                                <Typography  component={Link} to='/carts' marginRight={{md:"30px"}} sx={{color:"black",ml:"10px" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><ShoppingCartIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography> */}
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* {showCart && <Cart setShowCart={setShowCart}/>} */}
    </>
  );
}
