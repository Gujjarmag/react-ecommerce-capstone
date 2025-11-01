import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductsModal from "./ProductsModal";
import { useSelector } from "react-redux";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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
      <Box
        sx={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          px: { xs: 2, sm: 4, md: 6 },
          py: 4,
          mt: { xs: 7, sm: 8 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: 600,
            textAlign: "center",
            color: "#333",
          }}
        >
          Our Products
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent={"center"}
          sx={{
            maxWidth: "1300px",
            mx: "auto",
          }}
        >
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProductCard
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
