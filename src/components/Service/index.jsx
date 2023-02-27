import React, {forwardRef} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SERVICE from '../../json/service.json'
import { Typography,  Stack } from "@mui/material";



const Slideshow = (props,ref) => {
    return (
      <Stack ref={ref} width={{md:"100%",xs:"100%"}} display={{md:"flex",xs:"flex"}} justifyContent={{md:"center",xs:"center"}} alignItems={{md:"center",xs:"center"}} height={{md:"700px",xs:"500px"}} opacity={{md:"0.5"}} backgroundColor={{md:"#694324",xs:"#694324"}}>
      <Stack >
       <Typography variant='h3'   color={{ md: "#f7941d", xs: "#f7941d" }}
            fontWeight={{ md: "800", xs: "800" }}
            textAlign={{ md: "center", xs: "center" }}
            mb={{md:'40px',xs:'40px'}}
            fontSize={{ md: "50px", xs: "30px" }}
            fontFamily={{md:"Raleway",xs:"Raleway"}}
            >Our Services</Typography>
      
      
      </Stack>
      <Stack  width={{md:"80%",xs:"100%"}} className="slide-container">
        <Slide>
         {SERVICE.map((item, index)=> (
            <Stack backgroundColor={{md:'#694324',xs:"#694324"}} height={{md:"500px",xs:"300px"}} key={index}>
              <Stack  margin={{md:"auto",xs:"auto"}}  display={{md:"flex",xs:"flex"}} width={{md:"80%",xs:"90%"}} justifyContent={{md:"center",xs:'center'}} alignItems={{md:"center",xs:"center"}} height={{md:"100%"}}>
                <Typography variant='h5'  color={{md:"#fff",xs:'#fff'}} fontFamily={{md:"Raleway",xs:"Raleway"}} mb={{md:"30px",xs:"10px"}} fontWeight={{md:"800",xs:"800"}} fontSize={{md:"30px",xs:"16px"}} >{item.title}</Typography>
                <Typography variant='p' color={{md:"#fff",xs:'#fff'}}  mb={{md:"50px",xs:"50px"}} textAlign={{xs:"justify"}}  padding={{xs:"20px",md:"0px"}}  width={{xs:"90%",md:"justify"}} lineHeight={{md:"50px",xs:"22px"}} fontSize={{md:"26px",xs:'12px'}} fontFamily={{md:"Raleway",xs:"Raleway"}} > {item.description}</Typography>
              </Stack>
            </Stack>
          ))} 
        </Slide>
      </Stack>
      </Stack>
    )
}

export default forwardRef(Slideshow)