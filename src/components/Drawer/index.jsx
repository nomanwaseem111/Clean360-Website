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
                <Button href="/pages" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"20px"}}} >Pages</Button>
              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/features" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}}> Features</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/shops" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}}> Shop</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/blogs" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}} >Blogs</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

         


          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/elements" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}} >Elements</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

         

        </List>

      </Drawer>
      <IconButton sx={{ color: "black", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComp