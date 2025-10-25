import React from "react";
import HeroImg from "../../assets/hero_Img.webp";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "80vh",
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 3,
              textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
            }}
          >
            Forge Your Legacy with the Finest Medieval Goods
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              px: 4,
              py: 1.2,
              borderRadius: 2,
            }}
          >
            Explore the Market
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
