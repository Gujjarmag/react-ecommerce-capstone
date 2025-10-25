import React, { useState } from "react";
import FeaturedProducts from "./sections/FeaturedProducts";
import HeroSection from "./sections/HeroSection";
import ProductsModal from "./ProductsModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState({});

  const handleOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  return (
    <>
      <HeroSection />

      <FeaturedProducts onProductClick={handleOpen} />

      <ProductsModal
        open={open}
        handleClose={handleClose}
        currentProductId={selectedId}
      />
    </>
  );
};

export default Home;
