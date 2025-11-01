import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { products } from "../store/productsData";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

export default function ProductsModal(props) {
  const { open, handleClose, currentProductId } = props;

  const clickedProduct = products.find(
    (product) => product.id === currentProductId
  );

  // Adding line to return nothing if product not found
  if (!clickedProduct) return null;

  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container spacing={3}>
              <Grid xs={12} sm={6}>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  modules={[Navigation, Pagination]}
                  style={{ width: "100%", borderRadius: "12px" }}
                >
                  {clickedProduct.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`${clickedProduct.name}-${index}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "12px",
                          objectFit: "cover",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Typography gutterBottom variant="h4" id="product-modal-title">
                  {clickedProduct.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {clickedProduct.price} coins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Weight: {clickedProduct.weight}
                </Typography>
                <Typography
                  id="product-modal-description"
                  variant="body2"
                  color="text.secondary"
                >
                  Description: {clickedProduct.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    alignSelf: "flex-start",
                    borderRadius: "8px",
                  }}
                  onClick={() => dispatch(addToCart(clickedProduct))}
                >
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
