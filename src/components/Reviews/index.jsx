import React from 'react'
import { Box, Stack, Typography, TextField,TextareaAutosize } from "@mui/material";
import ReactStars from 'react-stars'

const index = () => {
    return (
        <Stack  width={{ md: "100%", xs: "100%" }} display={{ md: "flex", xs: 'flex' }} justifyContent={{ md: "center", xs: "center" }} flexDirection={{ md: 'row', xs: 'column', sm: "column" }} mb={{md:'50px'}} height={{ md: "430px", xs: "700px",lg:"660px",sm:"720px" }} >
            <Stack width={{ md: "45%", xs: "100%" }}  backgroundColor={{ md: "#fff" }} boxShadow={{md:'2px 2px 10px gray'}} borderRadius={{md:'10px',xs:"10px"}}>
                <Stack paddingLeft={{md:"47px",xs:"0px",sm:"200px",lg:"120px"}}   mt={{ md: "40px", xs: '40px' }} >
                    <Typography variant='h6' fontSize={{md:"20px",xs:"14px",sm:"18px"}} paddingRight={{xs:"28px",md:"0px",lg:'0px',sm:"0px"}} border={{ md: "1px solid white", xs: "1px solid white" }} width={{ md: '600px', xs: '400px' }} textAlign={{ md: 'center', xs: "center",sm:"center" }} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}>How Would you rate your experience with Hussain Enterprises</Typography>
                </Stack>
                <Stack  width={{ md: '90%' }} height={{ md: "500px" }} marginLeft={{ md: '40px' }} mt={{ md: '20px' }}>
                    <Stack mt={{md:"15px",xs:"40px",lg:"15px",sm:"40px"}}>
                        <Typography variant='h6' fontSize={{ md: "14px",xs:"14px",lg:"16px",sm:"16px" }} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}>*Your Rating</Typography>
                        <Stack margin={{ md: "auto",xs:"auto",lg:"auto",sm:"auto" }}>
                            <ReactStars size={50} edit={true} half={true} value={5} />
                        </Stack>
                    </Stack>


                    <Stack mt={{md:"15px",xs:"40px",lg:"5px",sm:"40px"}}>
                        <Typography variant='h6' fontSize={{ md: "14px",xs:"14px",lg:"16px",sm:"16px" }} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}  mb={{md:'5px',xs:"5px"}}> *Your Review</Typography>
                        <TextareaAutosize
                            maxRows={4}
                            aria-label="maximum height"
                            placeholder="Type Your Reviews"
           
                            style={{ width: "100%",height:"100px",padding:"10px",fontSize:"18px" }}
                        />
                    </Stack>

                    <Stack mt={{md:"30px",xs:'30px'}}>
                        <Typography variant='h6' fontSize={{ md: "14px",xs:"14px",lg:"16px",sm:"16px" }} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}  mb={{md:'5px',xs:"5px"}}>*Your Name</Typography>
                        <TextField id="outlined-basic"  variant="outlined" />
                    </Stack>

                    <Stack mt={{md:"30px",xs:'30px'}}>
                        <Typography variant='h6' fontSize={{ md: "14px",xs:"14px",lg:"16px",sm:"16px" }} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans"}} mb={{md:'5px',xs:"5px"}}>*Your Email</Typography>
                        <TextField id="outlined-basic"  variant="outlined" />
                    </Stack>

                    <Stack width={{md:'80px',xs:"80px"}} marginLeft={{md:"42%",xs:"33%",sm:"42%"}} mt={{md:"30px",xs:'30px'}}>
                       <button type='submit' style={{padding:"5px",border:"none",background:"green",color:"#fff",height:"40px",width:"150px",fontFamily:"Eudoxus Sans",textTransform:"uppercase",cursor:"pointer"}} >Submit</button>
                    </Stack>

                </Stack>


            </Stack>



        </Stack>
    )
}

export default index