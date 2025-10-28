import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductsModal from "./ProductsModal";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products.items);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState({});

  const onProductClick = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={3} justifyContent={"center"}>
          {products.map((product) => (
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

      <ProductsModal
        open={open}
        handleClose={handleClose}
        currentProductId={selectedId}
      />
    </>
  );
};

export default Products;
