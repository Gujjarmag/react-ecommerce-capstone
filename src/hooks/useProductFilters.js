import { useState, useMemo } from "react";

export default function useProductFilters(products) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("none"); // New state for sorting

  // Extract unique categories
  const categories = useMemo(() => {
    const unique = ["All"];
    products.forEach((p) => {
      if (p.category && !unique.includes(p.category)) unique.push(p.category);
    });
    return unique;
  }, [products]);

  // Apply filters + sorting
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchesSearch = p.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Apply sorting
    if (sortOption === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, searchTerm, selectedCategory, sortOption]);

  // Reset filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortOption("none");
  };

  return {
    categories,
    filteredProducts,
    searchTerm,
    selectedCategory,
    sortOption,
    setSearchTerm,
    setSelectedCategory,
    setSortOption,
    clearFilters,
  };
}
