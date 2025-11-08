import React from "react";
import HeroImg from "../../assets/heroImage.webp";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'UnifrakturCook', cursive",
  },
});

const HeroSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "80vh",
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: {
            xs: "top center",
            sm: "center",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 235, 205, 0.2)", // light overlay

            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              color: "#3A1F1F",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              letterSpacing: "0.1em",
              textAlign: "center",
              mt: 4,
              position: "relative",
              fontSize: {
                xs: "4.5rem", // mobile
                sm: "5.5rem", // tablet
                md: "6.5rem", // desktop
                lg: "8.5rem", // large screens
              },
            }}
          >
            Medieval Mart
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "#D9C6A5",
              fontWeight: "bold",
              mb: 3,
              textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
              fontSize: {
                xs: "1.25rem",
                sm: "1.5rem",
                md: "1.75rem",
                lg: "2rem",
              },
            }}
          >
            Forge Your Legacy with the Finest Medieval Goods
          </Typography>

          <Button
            component={NavLink}
            to="/products"
            variant="contained"
            size="large"
            sx={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              textTransform: "none",
              px: 4,
              py: 1.2,
              borderRadius: 2,
              backgroundColor: "#361B1B",
              "&:hover": {
                backgroundColor: "#4B2E2E", // darker pink on hover
              },
            }}
          >
            Explore the Market
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HeroSection;
