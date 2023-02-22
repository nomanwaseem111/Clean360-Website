import React, {forwardRef} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Typography,  Stack } from "@mui/material";
import ReactStars from 'react-stars'


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

const Review = (props,ref) => {
    return (
      <Stack ref={ref} width={{md:"100%",xs:"100%"}} display={{md:"flex",xs:"flex"}} justifyContent={{md:"center",xs:"center"}} alignItems={{md:"center",xs:"center"}} height={{md:"700px",xs:"500px"}} opacity={{md:"0.5"}} backgroundColor={{md:"#fff",xs:"#fff"}}>
      <Stack >
       <Typography variant='h3'   color={{ md: "#f7941d", xs: "#f7941d" }}
            fontWeight={{ md: "800", xs: "800" }}
            textAlign={{ md: "center", xs: "center" }}
            mb={{md:'40px',xs:'40px'}}
            fontSize={{ md: "50px", xs: "30px" }}
            fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
            >Review</Typography>
      
      
      </Stack>
      <Stack width={{md:"80%",xs:"100%"}} className="slide-container">
        <Slide>
        
            <Stack backgroundColor={{md:'#694324',xs:"#694324"}} height={{md:"500px",xs:"300px"}}>
              <Stack margin={{md:"auto",xs:"auto"}}  display={{md:"flex",xs:"flex"}} width={{md:"80%",xs:"90%"}} justifyContent={{md:"center",xs:'center'}} alignItems={{md:"center",xs:"center"}} height={{md:"100%"}}>
                 <Typography variant='h3' color={{md:"#fff",sm:"#fff",xs:"#fff"}}    mb={{lg:"20px",md:"20px",}}         fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}
 textAlign={{md:'center',xs:"center",sm:"center"}} fontSize={{lg:"36px",md:"26px",xs:"18px",sm:"16px"}} >Alan Border</Typography>
                <Typography variant='p'  mt={{md:"10px"}} textAlign={{md:'center',xs:"center",sm:"center"}} color={{md:"#fff",xs:'#fff'}}     padding={{xs:"20px",md:"0px"}}  width={{xs:"90%",md:"justify"}} lineHeight={{md:"50px",xs:"22px"}} fontSize={{md:"26px",xs:'12px'}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}} >We have called Butler many times to our house for various tasks, be it small or large we have always found them precise, particular and punctual – I think my family is in love with them thanks a lot guys you all are great!!</Typography>
                <Stack  mt={{md:"20px",xs:"0px"}}>
                <ReactStars   size={24} edit={true} half={true} value={5}/>
                </Stack>
              </Stack>
            </Stack>
    
        </Slide>
      </Stack>
      </Stack>
    )
}

export default forwardRef(Review)