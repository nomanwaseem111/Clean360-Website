import React, { useState } from 'react'
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';



const DrawerComp = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List id="drawer" style={{width:"280px"}} >

       
        <ListItemButton >
            <ListItemIcon>
              <ListItemText >
                <Button href="/" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"20px"}}} >Home</Button>
              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 
          <ListItemButton >
            <ListItemIcon>
              <ListItemText >
                <Button href="/whyus" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"20px"}}} >Why us</Button>
              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/service" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}}> Services</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/shops" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}}> About  </Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/blogs" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}} >Contact us</Button>

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