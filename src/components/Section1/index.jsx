import React from "react"
import { Stack, Grid, Container,  Typography, Button } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

import CheckroomIcon from '@mui/icons-material/Checkroom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import NearMeIcon from '@mui/icons-material/NearMe';



const index = () => {
  return (
    <Grid
      sx={{ height: { md: "950px", xs: "2440px" } }}
      id="banner"
      backgroundColor={{ md: "#e9ecef", xs: "#e9ecef" }}
    >
      <Container maxWidth="xl" width={{ xs: "100%" }}>
        <Stack>
          <Typography
            variant="h3"
            color={{ md: "#f7941d", xs: "#f7941d" }}
            fontWeight={{ md: "800", xs: "800" }}
            textAlign={{ md: "center", xs: "center" }}
            mt={{ md: "30px", xs: "80px" }}
          >
            Our Services
          </Typography>
        </Stack>
        <Stack
          direction={{ md: "row", xs: "column" }}
          width={{ md: "1300px" }}
          margin={{ md: "auto" }}
          display={{ md: "flex", xs: "flex" }}
          flexWrap={{ md: "wrap", xs: "wrap" }}
          pt={{ md: "30px", xs: "30px" }}
          justifyContent={{ md: "space-evenly", xs: "space-around" }}
          alignContent={{ md: "center", xs: "center" }}
        >
          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "#fff", xs: "#fff" },
              // background:{md:"green",xs:"green"}
            }}
          >
            <Stack
              width={{ md: "100%", xs: "100%" }}
              mt={{ md: "30px", xs: "30px" }}
            >
              {/* <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              /> */}
              <HomeIcon
                sx={{
                  fontSize: { md: "52px",xs:"52px" },
                  margin: { md: "auto", xs: "auto" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "30px", xs: "30px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "120px", md: "0px" },
                }}
              >
                Home Cleaning
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "10px", xs: "10px" }}
                color={{ md: "#6c757d", xs: "#6c757d" }}
                mb={{ md: "20px", xs: "20px" }}
                lineHeight={{ md: "28px", xs: "25px" }}
                sx={{
                  fontSize: { md: "16px", xs: "17px" },
                  width: { md: "80%", xs: "80%" },
                  height: { md: "auto", xs: "auto" },
                  textAlign: { md: "center", xs: "center" },
                  marginLeft: { md: "10%", xs: "10%" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Typography>
              <Button
                sx={{
                  borderRadius: { md: "none", xs: "none" },
                  background: { md: "#f7941d", xs: "#f7941d" },
                  color: { md: "#fff", xs: "#fff" },
                  width: { md: "28%", xs: "30%" },
                  marginLeft: { md: "36%", xs: "35%" },
                  "&:hover": {
                    background: { md: "#f7941d", xs: "#f7941d" },
                    color: { md: "#fff", xs: "#fff" },
                  },
                }}
              >
                Read More
              </Button>
            </Stack>
          </Stack>


          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "#fff", xs: "#fff" },
              // background:{md:"green",xs:"green"}
            }}
          >
            <Stack
              width={{ md: "100%", xs: "100%" }}
              mt={{ md: "30px", xs: "30px" }}
            >
              {/* <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              /> */}
              <CleaningServicesIcon
                sx={{
                  fontSize: { md: "52px",xs:"52px" },
                  margin: { md: "auto", xs: "auto" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "30px", xs: "30px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "145px", md: "0px" },
                }}
              >
              Cleaning
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "10px", xs: "10px" }}
                color={{ md: "#6c757d", xs: "#6c757d" }}
                mb={{ md: "20px", xs: "20px" }}
                lineHeight={{ md: "28px", xs: "25px" }}
                sx={{
                  fontSize: { md: "16px", xs: "17px" },
                  width: { md: "80%", xs: "80%" },
                  height: { md: "auto", xs: "auto" },
                  textAlign: { md: "center", xs: "center" },
                  marginLeft: { md: "10%", xs: "10%" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Typography>
              <Button
                sx={{
                  borderRadius: { md: "none", xs: "none" },
                  background: { md: "#f7941d", xs: "#f7941d" },
                  color: { md: "#fff", xs: "#fff" },
                  width: { md: "28%", xs: "30%" },
                  marginLeft: { md: "36%", xs: "35%" },
                  "&:hover": {
                    background: { md: "#f7941d", xs: "#f7941d" },
                    color: { md: "#fff", xs: "#fff" },
                  },
                }}
              >
                Read More
              </Button>
            </Stack>
          </Stack>



          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "#fff", xs: "#fff" },
              // background:{md:"green",xs:"green"}
            }}
          >
            <Stack
              width={{ md: "100%", xs: "100%" }}
              mt={{ md: "30px", xs: "30px" }}
            >
              {/* <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              /> */}
              <CheckroomIcon
                sx={{
                  fontSize: { md: "52px",xs:"52px" },
                  margin: { md: "auto", xs: "auto" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "30px", xs: "30px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "110px", md: "0px" },
                }}
              >
                Clothes Cleaning
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "10px", xs: "10px" }}
                color={{ md: "#6c757d", xs: "#6c757d" }}
                mb={{ md: "20px", xs: "20px" }}
                lineHeight={{ md: "28px", xs: "25px" }}
                sx={{
                  fontSize: { md: "16px", xs: "17px" },
                  width: { md: "80%", xs: "80%" },
                  height: { md: "auto", xs: "auto" },
                  textAlign: { md: "center", xs: "center" },
                  marginLeft: { md: "10%", xs: "10%" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Typography>
              <Button
                sx={{
                  borderRadius: { md: "none", xs: "none" },
                  background: { md: "#f7941d", xs: "#f7941d" },
                  color: { md: "#fff", xs: "#fff" },
                  width: { md: "28%", xs: "30%" },
                  marginLeft: { md: "36%", xs: "35%" },
                  "&:hover": {
                    background: { md: "#f7941d", xs: "#f7941d" },
                    color: { md: "#fff", xs: "#fff" },
                  },
                }}
              >
                Read More
              </Button>
            </Stack>
          </Stack>


          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "#fff", xs: "#fff" },
              // background:{md:"green",xs:"green"}
            }}
          >
            <Stack
              width={{ md: "100%", xs: "100%" }}
              mt={{ md: "30px", xs: "30px" }}
            >
              {/* <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              /> */}
              <PersonPinCircleIcon
                sx={{
                  fontSize: { md: "52px",xs:"52px" },
                  margin: { md: "auto", xs: "auto" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "30px", xs: "30px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "120px", md: "0px" },
                }}
              >
                Home Cleaning
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "10px", xs: "10px" }}
                color={{ md: "#6c757d", xs: "#6c757d" }}
                mb={{ md: "20px", xs: "20px" }}
                lineHeight={{ md: "28px", xs: "25px" }}
                sx={{
                  fontSize: { md: "16px", xs: "17px" },
                  width: { md: "80%", xs: "80%" },
                  height: { md: "auto", xs: "auto" },
                  textAlign: { md: "center", xs: "center" },
                  marginLeft: { md: "10%", xs: "10%" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Typography>
              <Button
                sx={{
                  borderRadius: { md: "none", xs: "none" },
                  background: { md: "#f7941d", xs: "#f7941d" },
                  color: { md: "#fff", xs: "#fff" },
                  width: { md: "28%", xs: "30%" },
                  marginLeft: { md: "36%", xs: "35%" },
                  "&:hover": {
                    background: { md: "#f7941d", xs: "#f7941d" },
                    color: { md: "#fff", xs: "#fff" },
                  },
                }}
              >
                Read More
              </Button>
            </Stack>
          </Stack>


          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "#fff", xs: "#fff" },
              // background:{md:"green",xs:"green"}
            }}
          >
            <Stack
              width={{ md: "100%", xs: "100%" }}
              mt={{ md: "30px", xs: "30px" }}
            >
              {/* <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              /> */}
              <AccountBalanceIcon
                sx={{
                  fontSize: { md: "52px",xs:"52px" },
                  margin: { md: "auto", xs: "auto" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "30px", xs: "30px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "120px", md: "0px" },
                }}
              >
                Home Cleaning
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "10px", xs: "10px" }}
                color={{ md: "#6c757d", xs: "#6c757d" }}
                mb={{ md: "20px", xs: "20px" }}
                lineHeight={{ md: "28px", xs: "25px" }}
                sx={{
                  fontSize: { md: "16px", xs: "17px" },
                  width: { md: "80%", xs: "80%" },
                  height: { md: "auto", xs: "auto" },
                  textAlign: { md: "center", xs: "center" },
                  marginLeft: { md: "10%", xs: "10%" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Typography>
              <Button
                sx={{
                  borderRadius: { md: "none", xs: "none" },
                  background: { md: "#f7941d", xs: "#f7941d" },
                  color: { md: "#fff", xs: "#fff" },
                  width: { md: "28%", xs: "30%" },
                  marginLeft: { md: "36%", xs: "35%" },
                  "&:hover": {
                    background: { md: "#f7941d", xs: "#f7941d" },
                    color: { md: "#fff", xs: "#fff" },
                  },
                }}
              >
                Read More
              </Button>
            </Stack>
          </Stack>


          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "#fff", xs: "#fff" },
              // background:{md:"green",xs:"green"}
            }}
          >
            <Stack
              width={{ md: "100%", xs: "100%" }}
              mt={{ md: "30px", xs: "30px" }}
            >
              {/* <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              /> */}
              <NearMeIcon
                sx={{
                  fontSize: { md: "52px",xs:"52px" },
                  margin: { md: "auto", xs: "auto" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "30px", xs: "30px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "120px", md: "0px" },
                }}
              >
                Home Cleaning
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "10px", xs: "10px" }}
                color={{ md: "#6c757d", xs: "#6c757d" }}
                mb={{ md: "20px", xs: "20px" }}
                lineHeight={{ md: "28px", xs: "25px" }}
                sx={{
                  fontSize: { md: "16px", xs: "17px" },
                  width: { md: "80%", xs: "80%" },
                  height: { md: "auto", xs: "auto" },
                  textAlign: { md: "center", xs: "center" },
                  marginLeft: { md: "10%", xs: "10%" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Typography>
              <Button
                sx={{
                  borderRadius: { md: "none", xs: "none" },
                  background: { md: "#f7941d", xs: "#f7941d" },
                  color: { md: "#fff", xs: "#fff" },
                  width: { md: "28%", xs: "30%" },
                  marginLeft: { md: "36%", xs: "35%" },
                  "&:hover": {
                    background: { md: "#f7941d", xs: "#f7941d" },
                    color: { md: "#fff", xs: "#fff" },
                  },
                }}
              >
                Read More
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default index
