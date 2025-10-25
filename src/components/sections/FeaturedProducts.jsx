import React from "react";
import { products } from "../../store/productsData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard";

const FeaturedProducts = ({ onProductClick }) => {
  const featured = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          Featured Products
        </Typography>
        <Grid container spacing={3} justifyContent={"center"}>
          {featured.map((product) => (
            <Grid item key={product.id}>
              <div onClick={() => onProductClick(product.id)}>
                <ProductCard product={product} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FeaturedProducts;
