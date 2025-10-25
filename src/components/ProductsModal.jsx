import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { products } from "../store/productsData";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
              <Grid item xs={12} sm={6}>
                <img
                  src={clickedProduct.image}
                  alt={clickedProduct.name}
                  style={{ width: "100%", borderRadius: "8px" }} //Change this style if does not look good
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography gutterBottom variant="h4" id="product-modal-title">
                  {clickedProduct.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Price: {clickedProduct.price} coins
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Weight: {clickedProduct.weight}
                </Typography>
                <Typography
                  id="product-modal-description"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  Description: {clickedProduct.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
