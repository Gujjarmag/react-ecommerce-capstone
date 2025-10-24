import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function ProductCard({ product }) {
  const { name, price, weight, image, description } = product;

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        {/* <Box
          sx={{
            bgcolor: "#1976D2",
            color: "white",
            textAlign: "center",
            py: 0.5,
          }}
        >
          <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
        </Box> */}
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
    </Card>
  );
}
