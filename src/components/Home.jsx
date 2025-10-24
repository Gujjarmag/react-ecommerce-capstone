import React from "react";
import { products } from "../store/productsData";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import Typography from "@mui/material/Typography";

const Home = () => {
  const featured = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          Featured Products
        </Typography>
        <Grid container spacing={3} justifyContent={"center"}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
