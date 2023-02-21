import React from 'react'
import { Box, Stack, Typography, TextField,TextareaAutosize } from "@mui/material";
import ReactStars from 'react-stars'

const index = () => {
    return (
        <Stack width={{ md: "100%", xs: "100%" }} display={{ md: "flex", xs: 'flex' }} justifyContent={{ md: "space-around", xs: "center" }} flexDirection={{ md: 'row', xs: 'column', sm: "column" }} mb={{md:'50px'}} height={{ md: "630px", xs: "400px" }} >
            <Stack width={{ md: "800px", xs: "100%" }} backgroundColor={{ md: "#fff" }} boxShadow={{md:'2px 2px 10px gray'}} borderRadius={{md:'10px',xs:"10px"}}>
                <Stack marginLeft={{ md: "100px", xs: "50px" }} mt={{ md: "40px", xs: '40px' }}>
                    <Typography variant='h6' border={{ md: "1px solid white", xs: "1px solid white" }} width={{ md: '600px', xs: '400px' }} textAlign={{ md: 'center', xs: "center" }} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}>How Would you rate your experience with Hussain Enterprises</Typography>
                </Stack>
                <Stack  width={{ md: '90%' }} height={{ md: "500px" }} marginLeft={{ md: '40px' }} mt={{ md: '20px' }}>
                    <Stack>
                        <Typography variant='h6' fontSize={{ md: "14px" }} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}>*Your Rating</Typography>
                        <Stack margin={{ md: "auto" }}>
                            <ReactStars size={50} edit={true} half={true} value={5} />
                        </Stack>
                    </Stack>


                    <Stack>
                        <Typography variant='h6' fontSize={{ md: "14px" }} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}  mb={{md:'5px',xs:"5px"}}> *Your Review</Typography>
                        <TextareaAutosize
                            maxRows={4}
                            aria-label="maximum height"
                            placeholder="Type Your Reviews"
           
                            style={{ width: "100%",height:"100px",padding:"10px",fontSize:"18px" }}
                        />
                    </Stack>

                    <Stack mt={{md:"30px",xs:'30px'}}>
                        <Typography variant='h6' fontSize={{md:"14px"}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}  mb={{md:'5px',xs:"5px"}}>*Your Name</Typography>
                        <TextField id="outlined-basic"  variant="outlined" />
                    </Stack>

                    <Stack mt={{md:"30px",xs:'30px'}}>
                        <Typography variant='h6' fontSize={{md:"14px"}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}} mb={{md:'5px',xs:"5px"}}>*Your Email</Typography>
                        <TextField id="outlined-basic"  variant="outlined" />
                    </Stack>

                    <Stack width={{md:'80px',xs:"80px"}} marginLeft={{md:"45%",xs:"45%"}} mt={{md:"30px",xs:'30px'}}>
                       <button type='submit' style={{padding:"5px",border:"none",background:"green",color:"#fff",height:"40px",fontFamily:"Eudoxus Sans",textTransform:"uppercase",cursor:"pointer"}} >Submit</button>
                    </Stack>

                </Stack>


            </Stack>
            <Stack width={{ md: "800px", xs: "100%" }} border={{ md: "1px solid black", xs: '1px solid black' }} >
                <Typography variant='h6' fontFamily={{md:'Eudoxus Sans'}} textAlign={{md:"center",xs:'center'}}>Read what our Customers are saying about our Service!</Typography>
                 <Stack mt={{md:"10px",xs:"10px"}} direction={{md:'row'}} display={{md:"flex"}} justifyContent={{md:"flex-end"}} alignItems={{md:'center'}}>
                 <Typography variant='span' mr={{md:'8px'}}>4.8</Typography>
                 <ReactStars/>
                 <Typography variant='span' fontWeight={{md:"bold",xs:"bold"}} ml={{md:"5px"}}>/</Typography>
                 <Typography variant='span' ml={{md:'4px'}}>2,206</Typography>

                 </Stack>
                 <Stack width={{md:'100%',xs:"100%"}} mt={{md:'10px',xs:"10px"}} border={{md:"1px solid orange"}} height={{md:"250px"}}>
                 </Stack>
            </Stack>

        </Stack>
    )
}

export default index