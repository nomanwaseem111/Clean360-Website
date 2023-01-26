import React from 'react'
import { Drawer,Box,Link, List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {data} from '../../App'


const DrawerComp = () => {

  const  {scrollToSection, homeRef, whyUsRef,servicesRef,aboutRef,contactRef,openDrawer,setOpenDrawer} = React.useContext(data);

  return (
    <>
      <Drawer  open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List id="drawer" sx={{width:"280px",background:'#553216',height:"100%",paddingTop:"80px"}}  >

       
        <ListItemButton  sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <ListItemIcon>
              <ListItemText >
              <Box
                  component={Link}
                  onClick={() => scrollToSection(homeRef)}
                  
                  
                  
               
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  sx={{textDecoration:"none",color:"#fff",fontSize:"26px",
                  
                
                 
              
                   
                   }}
                >
                  Home{" "}
                </Box>          
                    </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 
      
      
      
      
          <ListItemButton  sx={{mt:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ListItemIcon>
              <ListItemText >
              <Box  component={Link} onClick={() => scrollToSection(whyUsRef)}   sx={{textDecoration:"none",color:"#fff",fontSize:"26px",
               
                
                  
                 
                   
                   }}  spy={true} smooth={true} offset={-100} duration={500}>Why Us </Box>
              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton sx={{mt:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ListItemIcon>
              <ListItemText >
              <Box  component={Link} onClick={() => scrollToSection(servicesRef)} to="/services"  sx={{textDecoration:"none",color:"#fff",fontSize:"26px",textAlign:"center",
                  
                  
                
                   
                   }} spy={true} smooth={true} offset={-100} duration={500}>Services </Box>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton sx={{mt:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ListItemIcon>
              <ListItemText >
              <Box  component={Link} onClick={() => scrollToSection(aboutRef)} to="about"   sx={{textDecoration:"none",color:"#fff",fontSize:"26px",textAlign:"center",
                  
               
                  
                   
                   }} spy={true} smooth={true} offset={-100} duration={500}>About </Box>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton sx={{mt:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ListItemIcon>
              <ListItemText >
              <Box
                  component={Link}
                  onClick={() => scrollToSection(contactRef)}
                  sx={{textDecoration:"none",color:"#fff",fontSize:"26px"
             
                  
                   
                   }}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact{" "}
                </Box>
              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

         


       

         

        </List>

      </Drawer>
      <IconButton sx={{ color: "black", marginLeft: "auto",mt:{xs:"12px"} }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComp