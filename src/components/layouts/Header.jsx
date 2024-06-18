import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"gold"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1,my:2}}
      >
        <FastfoodIcon sx={{ mr: 1 }} />
        My Resto
      </Typography>
      <Divider/>
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              onClick={handleDrawerToggle}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ marginRight: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"gold"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon sx={{ mr: 1 }} />
              My Resto
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                  <Link to={"/menu"}>Menu</Link>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" },"& .MuiDrawer-paper":{
              boxSizing:"border-box",
              width:"240px"
            }}}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </div>
  );
}

export default Header;
