import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  GALLERY_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  RESERVE_ROUTE,
  ROOMS_ROUTE,
} from "../constant/routes";

export default function SwipeableTemporaryDrawer({ open, toggleDrawer }) {
  const headerItems = [
    { id: 1, name: "Home", to: HOME_ROUTE },
    { id: 2, name: "Login", to: LOGIN_ROUTE },
    { id: 3, name: "Booking", to: RESERVE_ROUTE },
    { id: 4, name: "Rooms", to: ROOMS_ROUTE },
    { id: 5, name: "Gallery", to: GALLERY_ROUTE },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {headerItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton component={NavLink} to={item.to}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider  />
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
