import React from "react";
import { Stack, Grid, Container, Box, Typography, Button } from "@mui/material";

const index = () => {
  return (
    <Grid
      sx={{ height: { md: "850px", xs: "auto" } }}
      id="banner"
      backgroundColor={{ md: "#e9ecef", xs: "#e9ecef" }}
    >
      <Container maxWidth="xl" width={{ xs: "100%" }}>
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
              <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "20px", xs: "20px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "100px", md: "0px" },
                }}
              >
                cockroach control
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "20px", xs: "20px" }}
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
              <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "20px", xs: "20px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "100px", md: "0px" },
                }}
              >
                cockroach control
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "20px", xs: "20px" }}
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
              <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "20px", xs: "20px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "100px", md: "0px" },
                }}
              >
                cockroach control
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "20px", xs: "20px" }}
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
              <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "20px", xs: "20px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "100px", md: "0px" },
                }}
              >
                cockroach control
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "20px", xs: "20px" }}
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
              <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "20px", xs: "20px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "100px", md: "0px" },
                }}
              >
                cockroach control
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "20px", xs: "20px" }}
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
              <Box
                component="img"
                src=""
                sx={{
                  width: { md: "60px", xs: "60px" },
                  height: { md: "60px", xs: "60px" },
                  marginLeft: { md: "40%", xs: "40%" },
                }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                mt={{ md: "20px", xs: "20px" }}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: { md: "40px", xs: "40px" },
                  textAlign: { md: "center" },
                  paddingLeft: { xs: "100px", md: "0px" },
                }}
              >
                cockroach control
              </Typography>
              <Typography
                variant="p"
                fontFamily={{ md: "sans-serif", xs: "sans-serif" }}
                mt={{ md: "20px", xs: "20px" }}
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
                }}
              >
                Read More
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  );
};

export default index;
