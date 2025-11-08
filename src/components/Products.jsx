import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductsModal from "./ProductsModal";
import { useSelector } from "react-redux";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useProductFilters from "../hooks/useProductFilters";
import ProductsFilterBar from "./sections/ProductsFilterBar";

const Products = () => {
  const products = useSelector((state) => state.products.items);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState({});

  const {
    categories,
    filteredProducts,
    searchTerm,
    selectedCategory,
    sortOption,
    setSearchTerm,
    setSelectedCategory,
    setSortOption,
    clearFilters,
  } = useProductFilters(products);

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
        <ProductsFilterBar
          categories={categories}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortOption}
          onClearFilters={clearFilters}
        />

        <Grid
          container
          justifyContent="center"
          spacing={4}
          sx={{
            maxWidth: "1300px",
            mx: "auto",
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 2.5 }}
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
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                mt: 5,
                color: "gray",
                width: "100%",
              }}
            >
              No products found.
            </Typography>
          )}
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
