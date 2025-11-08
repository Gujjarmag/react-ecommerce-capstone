import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";

const FeaturedProducts = ({ onProductClick }) => {
  const products = useSelector((state) => state.products.items);
  // const featured = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const randomProducts = [...products]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      setFeatured(randomProducts);
    }
  }, [products]);

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          Featured Products
        </Typography>
        <Grid container spacing={3} justifyContent={"center"}>
          {featured.map((product) => (
            <Grid key={product.id}>
              <ProductCard
                key={product.id}
                product={product}
                onOpen={() => onProductClick(product.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FeaturedProducts;
