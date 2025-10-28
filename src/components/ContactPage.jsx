import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";

// Default Values
const initialContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

// Validation Schema
const contactSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone must contain only digits")
    .required("Phone is required"),
  message: yup.string().required("Message is required"),
});

export default function ContactPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialContactFormValues,
    resolver: yupResolver(contactSchema),
  });

  // SnackBar
  const { enqueueSnackbar } = useSnackbar();

  const handleContactSubmit = (data) => {
    console.log("Contact form data:", data);
    enqueueSnackbar("Message sent successfully!", {
      variant: "success",
      autoHideDuration: 1200,
    });
    reset(initialContactFormValues);
  };

  // SnackBar
  const handleInvalidSubmit = () => {
    enqueueSnackbar("Please fill in all required fields correctly.", {
      variant: "error",
      autoHideDuration: 1800,
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Card variant="outlined" sx={{ p: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>

          <Typography gutterBottom variant="body2">
            Fill out this form to get in contact with us.
          </Typography>

          <form
            onSubmit={handleSubmit(handleContactSubmit, handleInvalidSubmit)}
          >
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="First Name*"
                      variant="outlined"
                      fullWidth
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                    />
                  )}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Last Name*"
                      variant="outlined"
                      fullWidth
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                    />
                  )}
                />
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email*"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone*"
                    variant="outlined"
                    fullWidth
                    type="text" // 👈 change this back
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message*"
                    variant="outlined"
                    multiline
                    rows={3}
                    fullWidth
                    error={!!errors.message}
                    helperText={errors.message?.message}
                  />
                )}
              />
            </Box>
            <CardActions sx={{ justifyContent: "center", mt: 2 }}>
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
