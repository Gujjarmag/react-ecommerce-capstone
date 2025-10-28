import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../assets/logo_mmww.png";
import { Link, NavLink } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { useSelector } from "react-redux";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { totalQuantity } = useSelector((state) => state.cart);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/">
        <img src={Logo} alt="MedievalMart Logo" className="w-45 h-auto" />
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: "#1976D2" }} elevation={10}>
        <Toolbar className="flex justify-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img src={Logo} alt="MedievalMart Logo" className="w-45 h-auto" />
          </Link>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white-500 font-bold px-3"
                  : "text-[#B0D9FE] px-3"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white-500 font-bold px-3"
                  : "text-[#B0D9FE] px-3"
              }
              to="/products"
            >
              Products
            </NavLink>

            {/* Add padding x-direction */}
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white-500 font-bold px-3"
                  : "text-[#B0D9FE] px-3"
              }
              to="/cart"
            >
              <IconButton aria-label="cart">
                <ShoppingCartIcon />
                <CartBadge
                  badgeContent={totalQuantity}
                  color="secondary"
                  overlap="circular"
                />
              </IconButton>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white-500 font-bold px-3"
                  : "text-[#B0D9FE] px-3"
              }
              to="/contact"
            >
              Contact
            </NavLink>

            {/* Cart Icon To be removed */}
            {/* <NavLink to="/cart">
              <ShoppingCartIcon color="action" />
            </NavLink> */}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default NavBar;
