import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";
import { Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import Drawer from "../Drawer";
import Logo from '../assets/logo2.png'


export default function ButtonAppBar() {
  const [value, setValue] = React.useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: { md: "#171c28", xs: "#171c28" },
                   display:{md:"flex"},
                   justifyContent:{md:"center"},
                   alignItems:{md:"center"},height:{md:"100px",xs:"70px"} }}
        // border={{md:"1px solid white"}}
      >
        <Toolbar className="nav"  sx={{
                   
                //    border:{md:"1px solid white"},
                   width:{md:"1300px"},
                   display:{md:"flex"},
                   justifyContent:{md:"space-between"},
                   alignItems:{md:"center"}
                 }}>
         
          <Box component="img" src={Logo} width={{md:"240px",xs:"150px"}} height={{md:"auto"}} mt={{xs:"10px",md:"0px"}} />
          {isMatch ? (
            <>
              <Drawer />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
               
              >
                <Tab
                  label="Home "
                  sx={{
                    color: "#f7941d",
                    // border:{md:"1px solid white"},
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  component={Link}
                  to="/"
                />
                <Tab
                  label="Pages"
                  sx={{
                    color: "#fff",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/pages"
                  component={Link}

                />
                <Tab
                  label="Features "
                  sx={{
                    color: "#fff",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/feautures"
                  component={Link}

                />

                <Tab
                  label="Shop"
                  sx={{
                    color: "#fff",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/shop"
                  component={Link}

                />
                <Tab
                  label="Blog "
                  sx={{
                    color: "#fff",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/blog"
                  component={Link}

                />
                 <Tab
                  label="Elements "
                  sx={{
                    color: "#fff",
                    fontSize:{md:"14px",xs:"14px"}
                  }}
                  to="/elements"
                  component={Link}

                />
                {/* <Tab label="Product " sx={{color:"black",fontSize:"20px"}} component={Link} to="/product" /> */}
                {/* <Tab label="Cart " sx={{color:"black",fontSize:"20px"}} component={Link} to="/cartsection" /> */}
              </Tabs>

              {/* <Button   sx={{marginLeft:"auto"}} component={Link} to="/login" variant="contained"><LoginIcon/></Button> */}

              {/* <Typography component={Link} to='/login' sx={{color:"black",ml:"auto" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><LoginIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                                <Typography component={Link} to='/signup'  sx={{color:"black",ml:"10px" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><VpnKeyIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                                <Typography  component={Link} to='/carts' marginRight={{md:"30px"}} sx={{color:"black",ml:"10px" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><ShoppingCartIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography> */}
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* {showCart && <Cart setShowCart={setShowCart}/>} */}
    </>
  );
}
