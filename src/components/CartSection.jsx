import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { addToCart, clearCart, removeFromCart } from "../store/cartSlice";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import ProductsModal from "./ProductsModal";

const CartSection = () => {
  const { cartList, totalQuantity, totalPrice, totalWeight } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  // Product Modal State
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(null);

  const handleOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  if (cartList.length === 0) {
    return (
      <>
        <Toolbar />
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#333" }}>
            Your cart is empty 🛒
          </Typography>
          <Typography variant="body1" sx={{ color: "#666" }}>
            Try adding some products from our Products page!
          </Typography>
        </Box>
      </>
    );
  }
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
          Your Shopping Cart
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent={"center"}
          sx={{ maxWidth: "1300px", mx: "auto" }}
        >
          {cartList.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(item.id)}
            >
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    Price: {item.price} coins
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    Weight: {item.weight} × {item.quantity} ={" "}
                    {(parseFloat(item.weight) * item.quantity).toFixed(2)} kg
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(removeFromCart(item));
                      }}
                    >
                      -
                    </Button>
                    <Button
                      variant="outlined"
                      color="success"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addToCart(item));
                      }}
                    >
                      +
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Total Items: {totalQuantity}</Typography>
          <Typography variant="h6">Total Price: {totalPrice} coins</Typography>
          <Typography variant="h6">
            Total Weight: {totalWeight.toFixed(2)} kg
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => alert("Proceeding to checkout...")}
            >
              Checkout
            </Button>
          </Stack>
        </Box>
      </Box>
      <ProductsModal
        open={open}
        handleClose={handleClose}
        currentProductId={selectedId}
      />
    </>
  );
};

export default CartSection;
