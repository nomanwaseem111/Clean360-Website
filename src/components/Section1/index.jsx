import React from "react";
import { Stack, Grid, Container } from "@mui/material";

const index = () => {
  return (
    <Grid sx={{ height: { md: "auto" } }} id="banner">
      <Container maxWidth="xl" width={{ xs: "100%" }}>
        <Stack
          direction={{ md: "row", xs: "column" }}
          width={{ md: "1300px" }}
          margin={{ md: "auto" }}
          display={{ md: "flex", xs: "flex" }}
          flexWrap={{ md: "wrap", xs: "wrap" }}
          mt={{ md: "30px", xs: "30px" }}
          justifyContent={{ md: "space-evenly", xs: "space-around" }}
          alignContent={{ md: "center", xs: "center" }}
        >
          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "red", xs: "red" },
            }}
          >
            A
          </Stack>
          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "red", xs: "red" },
            }}
          >
            A
          </Stack>
          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "red", xs: "red" },
            }}
          >
            A
          </Stack>
          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "red", xs: "red" },
            }}
          >
            A
          </Stack>
          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "red", xs: "red" },
            }}
          >
            A
          </Stack>
          <Stack
            mt={{ md: "30px", xs: "30px" }}
            sx={{
              width: { md: "400px", xs: "110%" },
              height: "350px",
              xs: "300px",
              background: { md: "red", xs: "red" },
            }}
          >
            A
          </Stack>
        </Stack>
      </Container>
    </Grid>
  );
};

export default index;
