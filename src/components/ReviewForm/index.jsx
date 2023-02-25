import React, { useState } from "react";
import { Stack, Typography, TextField } from "@mui/material";
import ReactStars from "react-stars";
import { TailSpin } from "react-loader-spinner";
import swal from "sweetalert";
import {reviewRef} from '../../firebase/firebase'
import { set } from "firebase/database";
import { useContext } from "react";
import { ReviewContext } from "../../hook/reviewContext";

function ReviewFrom() {
     const {setReview} = useContext(ReviewContext)
     const [rating,setRating] = useState(0)
     const [loading,setLoading] = useState(false)
     const [comment,setComment] = useState("")
     const [email,setEmail] = useState("")
     const [name,setName] = useState("")

     const sendReview = async (e)  => {
       
        e.preventDefault()
     
        setLoading(true)

        try {
            let args =  {
              comment:comment,
              name:name,
              rating:rating,
              email:email
          }
            await set(reviewRef,args)
            setRating("")
            setComment("")
            setEmail("")
            setName("")
            setReview(args)
            swal({
                title: "Review Sent",
                icon: "success",
                button:false,
                timer:3000
              })
            
        } catch (error) {
            swal({
                title: error.message,
                icon: "error",
                button:false,
                timer:3000
              })
            
        }
        setLoading(false)

     }


    return (
        <form onSubmit={(e) => sendReview(e)}>    
        
           
          <Stack
        width={{ md: "100vw", xs: "100vw" }}
        display={{ md: "flex", xs: "flex" }}
        justifyContent={{ md: "center", xs: "center" }}
        flexDirection={{ md: "row", xs: "column", sm: "column" }}
        mb={{ md: "50px" }}
        height={{ md: "430px", xs: "700px", lg: "660px", sm: "720px" }}
        // backgroundColor={{md:"red",xs:"yellow",sm:"blue"}}
        mt={{md:"80px",xs:"60px",sm:"60px"}}
      >
        <Stack
          width={{ md: "800px", xs: "100%" }}
          backgroundColor={{ md: "#fff" }}
          boxShadow={{ md: "2px 2px 10px gray" }}
          borderRadius={{ md: "10px", xs: "10px" }}
          height={{md:"auto",xs:"auto",sm:"auto",lg:"auto"}}
        >
          <Stack
            display={{ md: "flex", xs: "flex", sm: "flex" }}
            justifyContent={{ md: "center", xs: "center", sm: "center" }}
            alignItems={{ md: "center", xs: "center", sm: "center" }}
            mt={{ md: "40px", xs: "40px" }}
          >
            <Typography
              variant="h6"
              fontSize={{ md: "20px", xs: "14px", sm: "20px" }}
              border={{ md: "1px solid white", xs: "1px solid white" }}
              width={{ md: "600px", xs: "250px", sm: "400px" }}
              textAlign={{ xs: "center", sm: "center" }}
              fontFamily={{ md: "Eudoxus Sans", xs: "Eudoxus Sans" }}
            >
              How Would you rate your experience with Hussain Enterprises
            </Typography>
          </Stack>
          <Stack
            width={{ md: "90%" }}
            height={{ md: "500px" }}
            marginLeft={{ md: "40px" }}
            mt={{ md: "20px" }}
          >
            <Stack
              width={{ md: "100%", xs: "95%", lg: "100%", sm: "95%" }}
              margin={{ xs: "auto" }}
              mt={{ md: "15px", xs: "40px", lg: "15px", sm: "40px" }}
            >
              <Typography
                variant="h6"
                fontSize={{ md: "14px", xs: "14px", lg: "16px", sm: "16px" }}
                fontFamily={{ md: "Eudoxus Sans", xs: "Eudoxus Sans" }}
              >
                *Your Rating
              </Typography>
              <Stack
                margin={{ md: "auto", xs: "auto", lg: "auto", sm: "auto" }}
              >
                <ReactStars
                  required
                  size={50}
              
                  half={true}
                  value={rating}
                  onChange={(rate) => setRating(rate)}
                />
              </Stack>
            </Stack>

            <Stack
              margin={{ xs: "auto", sm: "auto" }}
              width={{ md: "100%", xs: "95%" }}
              mt={{ md: "15px", xs: "40px", lg: "5px", sm: "40px" }}
            >
              <Typography
                variant="h6"
                fontSize={{ md: "14px", xs: "14px", lg: "16px", sm: "16px" }}
                fontFamily={{ md: "Eudoxus Sans", xs: "Eudoxus Sans" }}
                mb={{ md: "5px", xs: "5px" }}
              >
                {" "}
                *Your Review
              </Typography>

              <TextField
                placeholder="share your reviews"
                multiline
                rows={2}
                maxRows={4}
                sx={{
                  width: { md: "100%", xs: "100%", lg: "100%", sm: "100%" },
                  margin: { xs: "auto" },
                }}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Stack>

            <Stack
              width={{ md: "100%", xs: "95%", lg: "100%", sm: "95%" }}
              margin={{ xs: "auto" }}
              mt={{ md: "30px", xs: "30px" }}
            >
              <Typography
                variant="h6"
                fontSize={{ md: "14px", xs: "14px", lg: "16px", sm: "16px" }}
                fontFamily={{ md: "Eudoxus Sans", xs: "Eudoxus Sans" }}
                mb={{ md: "5px", xs: "5px" }}
              >
                *Your Name
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Stack>

            <Stack
              width={{ md: "100%", xs: "95%", lg: "100%", sm: "95%" }}
              margin={{ xs: "auto" }}
              mt={{ md: "30px", xs: "30px" }}
            >
              <Typography
                variant="h6"
                fontSize={{ md: "14px", xs: "14px", lg: "16px", sm: "16px" }}
                fontFamily={{ md: "Eudoxus Sans", xs: "Eudoxus Sans" }}
                mb={{ md: "5px", xs: "5px" }}
              >
                *Your Email
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Stack>

            <Stack
              width={{ md: "100%", xs: "100%" }}
              display={{ md: "flex", xs: "flex", lg: "flex", sm: "flex" }}
              justifyContent={{
                md: "center",
                lg: "center",
                xs: "center",
                sm: "center",
              }}
              alignItems={{
                md: "center",
                lg: "center",
                sm: "center",
                xs: "center",
              }}
              mt={{ md: "30px", xs: "30px" }}
            >
              <button
                style={{
                  padding: "5px",
                  border: "none",
                  background: "#694324",
                  color: "#fff",
                  height: "40px",
                  width: "130px",
                  fontFamily: "Eudoxus Sans",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                {loading ? (
                  <Stack
                    display={{ lg: "flex", md: "flex", sm: "flex", xs: "flex" }}
                    justifyContent={{
                      lg: "center",
                      md: "center",
                      sm: "center",
                      xs: "center",
                    }}
                    alignItems={{
                      lg: "center",
                      md: "center",
                      sm: "center",
                      xs: "center",
                    }}
                  >
                    <TailSpin width={30} height={30} color="#fff" />
                  </Stack>
                ) : (
                  "Submit"
                )}
              </button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </form>
  );
}

export default ReviewFrom;
