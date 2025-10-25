import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../store/productsData";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductsModal from "./ProductsModal";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState({});

  const handleOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={3} justifyContent={"center"}>
          {products.map((product) => (
            <Grid item key={product.id}>
              <div onClick={() => handleOpen(product.id)}>
                <ProductCard product={product} />
              </div>
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
