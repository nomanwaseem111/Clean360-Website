import React, {forwardRef} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SERVICE from '../../json/service.json'
import { Typography,  Stack } from "@mui/material";

// const spanStyle = {
//   padding: '20px',
//   background: 'red',
//   color: '#000000'
// }


// const slideImages = [
//   {
//     url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     caption: 'Slide 1'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//     caption: 'Slide 2'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     caption: 'Slide 3'
//   },
// ];

const Slideshow = (props,ref) => {
    return (
      <Stack ref={ref} width={{md:"100%",xs:"100%"}} display={{md:"flex",xs:"flex"}} justifyContent={{md:"center",xs:"center"}} alignItems={{md:"center",xs:"center"}} height={{md:"700px",xs:"500px"}} opacity={{md:"0.5"}} backgroundColor={{md:"#694324",xs:"#694324"}}>
      <Stack >
       <Typography variant='h3'   color={{ md: "#f7941d", xs: "#f7941d" }}
            fontWeight={{ md: "800", xs: "800" }}
            textAlign={{ md: "center", xs: "center" }}
            mb={{md:'40px',xs:'40px'}}
            fontSize={{ md: "50px", xs: "30px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
            >Our Services</Typography>
      
      
      </Stack>
      <Stack width={{md:"80%",xs:"100%"}} className="slide-container">
        <Slide>
         {SERVICE.map((item, index)=> (
            <Stack backgroundColor={{md:'#694324',xs:"#694324"}} height={{md:"500px",xs:"300px"}} key={index}>
              <Stack margin={{md:"auto",xs:"auto"}}  display={{md:"flex",xs:"flex"}} width={{md:"80%",xs:"90%"}} justifyContent={{md:"center",xs:'center'}} alignItems={{md:"center",xs:"center"}} height={{md:"100%"}}>
                <Typography variant='h5'  color={{md:"#fff",xs:'#fff'}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}} mb={{md:"30px",xs:"10px"}} fontWeight={{md:"800",xs:"800"}} fontSize={{md:"30px",xs:"16px"}} >{item.title}</Typography>
                <Typography variant='p' color={{md:"#fff",xs:'#fff'}}  mb={{md:"50px",xs:"50px"}} textAlign={{xs:"justify"}}  padding={{xs:"20px",md:"0px"}}  width={{xs:"90%",md:"justify"}} lineHeight={{md:"50px",xs:"22px"}} fontSize={{md:"26px",xs:'12px'}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}} > {item.description}</Typography>
              </Stack>
            </Stack>
          ))} 
        </Slide>
      </Stack>
      </Stack>
    )
}

export default forwardRef(Slideshow)