import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../store/productsData";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Products = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={3} justifyContent={"center"}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
