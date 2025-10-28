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

const CartSection = () => {
  const { cartList, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  if (cartList.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h5">
          Your cart is empty, trying adding some products from our products
          page. Thanks!
        </Typography>
      </Box>
    );
  }
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={3} justifyContent={"center"}>
          {cartList.map((item) => (
            <Grid key={item.id}>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">
                    Price: {item.price} coins
                  </Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      -
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h6">Total Items: {totalQuantity}</Typography>
          <Typography variant="h6">Total Price: {totalPrice} coins</Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
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
    </>
  );
};

export default CartSection;
