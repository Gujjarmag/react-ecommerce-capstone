import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";

export default function ProductCard({ product, onOpen }) {
  const { name, price, weight, image } = product;
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Item added to cart!", {
      variant: "success",
      autoHideDuration: 1200,
    });
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea onClick={onOpen}>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Price: {price} coins
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Weight: {weight}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        variant="outlined"
        sx={{ m: 2 }}
        onClick={() => {
          dispatch(addToCart(product));
          handleClickVariant("success")();
        }}
      >
        Add to Cart
      </Button>
    </Card>
  );
}
