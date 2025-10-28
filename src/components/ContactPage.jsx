import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom variant="h5">
        Contact Us
      </Typography>

      <Typography gutterBottom variant="body2">
        Fill out this form to get in contact with us.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <TextField id="outlined-basic" label="First Name*" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name*" variant="outlined" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <TextField id="outlined-basic" label="Email*" variant="outlined" />
        <TextField id="outlined-basic" label="Phone*" variant="outlined" />
        <TextField id="outlined-basic" label="Message*" variant="outlined" />
      </Box>
    </CardContent>
    <CardActions>
      <Button variant="contained">Submit</Button>
    </CardActions>
  </React.Fragment>
);

export default function ContactPage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
