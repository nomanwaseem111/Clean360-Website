import React from "react";
import { Stack, Typography } from "@mui/material";

const index = () => {
  return (
    <Stack
      display={{ md: "flex", xs: "flex" }}
      justifyContent={{ md: "center", xs: "center" }}
      alignItems={{ md: "center", xs: "center" }}
      sx={{
        background: { md: "#553216", xs: "#553216" },
        opacity: { md: "0.9", xs: "0.9" },
        width: { md: "100%", xs: "100%" },
        height: { md: "520px", xs: "980px" },
      }}
    >
      <Stack
        sx={{
          width: { md: "70%", xs: "97%" },
          height: { md: "auto", xs: "auto" },
        }}
      >
        <Stack
          mt={{ md: "20p" }}
          display={{ md: "flex", xs: "flex" }}
          flexWrap={{ md: "wrap", xs: "wrap" }}
          justifyContent={{ md: "center", xs: "center" }}
          alignItems={{ md: "center", xs: "center" }}
        >
          <Typography
            variant="h3"
            sx={{
              color: { md: "#fff", xs: "#fff" },
              fontWeight: { md: "700", xs: "700" },
              fontSize: { md: "38px", xs: "28px" },
            }}
          >
            HISTORY OF CLEAN360°
          </Typography>
        </Stack>
        <hr
          color="#f7941d"
          id="hrline"
          style={{ marginTop: "30px", marginBottom: "40px" }}
        />

        <Stack
          mb={{ md: "80px", xs: "50px" }}
          display={{ md: "flex", xs: "flex" }}
          flexWrap={{ md: "wrap", xs: "wrap" }}
          justifyContent={{ md: "center", xs: "center" }}
          alignItems={{ md: "center", xs: "center" }}
        >
          <Typography
            variant="p"
            sx={{
              color: { md: "#fff", xs: "#fff" },
              textAlign: { md: "center", xs: "center" },
              width: { md: "50%", xs: "90%" },
              fontSize: { md: "16px", xs: "16px" },
              fontFamily: { md: "sans-serif", xs: "sans-serif" },
              lineHeight: { md: "24px", xs: "24px" },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </Typography>
        </Stack>
        <Stack
          direction={{ md: "row", xs: "column" }}
          display={{ md: "flex", xs: "flex" }}
          flexWrap={{ md: "wrap", xs: "wrap" }}
          justifyContent={{ md: "space-evenly", xs: "center" }}
          alignItems={{ md: "center", xs: "center" }}
        >
          <Stack
            mb={{ md: "0px", xs: "20px" }}
            textAlign={{ md: "center", xs: "center" }}
            sx={{ width: { md: "280px", xs: "90%" } }}
          >
            <Typography
              color={{ md: "#fff", xs: "#fff" }}
              textTransform={{ md: "uppercase", xs: "uppercase" }}
              fontSize={{ md: "30px", xs: "30px" }}
              fontWeight={{ md: "800", xs: "800" }}
              variant="h2"
              pb={{ md: "15px", xs: "15px" }}
            >
              project
            </Typography>
            <hr color="grey" />
            <Typography
              color={{ md: "#f7941d", xs: "#f7941d" }}
              textTransform={{ md: "uppercase", xs: "uppercase" }}
              fontSize={{ md: "70px", xs: "70px" }}
              fontWeight={{ md: "800", xs: "800" }}
              variant="h2"
              pt={{ md: "5px", xs: "5px" }}
            >
              756
            </Typography>
          </Stack>

          <Stack
            mb={{ md: "0px", xs: "20px" }}
            textAlign={{ md: "center", xs: "center" }}
            sx={{ width: { md: "280px", xs: "90%" } }}
          >
            <Typography
              color={{ md: "#fff", xs: "#fff" }}
              textTransform={{ md: "uppercase", xs: "uppercase" }}
              fontSize={{ md: "30px", xs: "30px" }}
              fontWeight={{ md: "800", xs: "800" }}
              variant="h2"
              pb={{ md: "15px", xs: "15px" }}
            >
              HOURS
            </Typography>
            <hr color="grey" />
            <Typography
              color={{ md: "#f7941d", xs: "#f7941d" }}
              textTransform={{ md: "uppercase", xs: "uppercase" }}
              fontSize={{ md: "70px", xs: "70px" }}
              fontWeight={{ md: "800", xs: "800" }}
              variant="h2"
              pt={{ md: "5px", xs: "5px" }}
            >
              9105
            </Typography>
          </Stack>

          <Stack
            mb={{ md: "0px", xs: "20px" }}
            textAlign={{ md: "center", xs: "center" }}
            sx={{ width: { md: "280px", xs: "90%" } }}
          >
            <Typography
              color={{ md: "#fff", xs: "#fff" }}
              textTransform={{ md: "uppercase", xs: "uppercase" }}
              fontSize={{ md: "30px", xs: "30px" }}
              fontWeight={{ md: "800", xs: "800" }}
              variant="h2"
              pb={{ md: "15px", xs: "15px" }}
            >
              Team
            </Typography>
            <hr color="grey" />
            <Typography
              color={{ md: "#f7941d", xs: "#f7941d" }}
              textTransform={{ md: "uppercase", xs: "uppercase" }}
              fontSize={{ md: "70px", xs: "70px" }}
              fontWeight={{ md: "800", xs: "800" }}
              variant="h2"
              pt={{ md: "5px", xs: "5px" }}
            >
              105
            </Typography>
          </Stack>

          <Stack
            mb={{ md: "0px", xs: "20px" }}
            textAlign={{ md: "center", xs: "center" }}
            sx={{ width: { md: "280px", xs: "90%" } }}
          >
            <Typography
              color={{ md: "#fff", xs: "#fff" }}
              textTransform={{ md: "uppercase", xs: "uppercase" }}
              fontSize={{ md: "30px", xs: "30px" }}
              fontWeight={{ md: "800", xs: "800" }}
              variant="h2"
              pb={{ md: "15px", xs: "15px" }}
            >
              client
            </Typography>
            <hr color="grey" />
            <Typography
              color={{ md: "#f7941d", xs: "#f7941d" }}
              textTransform={{ md: "uppercase", xs: "uppercase" }}
              fontSize={{ md: "70px", xs: "70px" }}
              fontWeight={{ md: "800", xs: "800" }}
              variant="h2"
              pt={{ md: "5px", xs: "5px" }}
            >
              135
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default index;
