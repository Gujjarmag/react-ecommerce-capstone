import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ProductsFilterBar = ({
  categories,
  searchTerm,
  selectedCategory,
  sortOption,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onClearFilters,
}) => {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          maxWidth: "800px",
          mx: "auto",
          mb: 4,
        }}
      >
        {/* 🔍 Search */}
        <TextField
          fullWidth
          label="Search products..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        {/* Category Filter */}
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={selectedCategory}
            label="Category"
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/*  Sort By */}
        <FormControl fullWidth>
          <InputLabel id="sort-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-select-label"
            value={sortOption}
            label="Sort By"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="name-asc">Name (A → Z)</MenuItem>
            <MenuItem value="name-desc">Name (Z → A)</MenuItem>
            <MenuItem value="price-asc">Price (Low → High)</MenuItem>
            <MenuItem value="price-desc">Price (High → Low)</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Box textAlign="center" sx={{ mb: 3 }}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={onClearFilters}
          disabled={
            searchTerm === "" &&
            selectedCategory === "All" &&
            sortOption === "none"
          }
        >
          Clear Filters
        </Button>
      </Box>
    </>
  );
};

export default ProductsFilterBar;
