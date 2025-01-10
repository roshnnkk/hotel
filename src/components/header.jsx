import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  GALLERY_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  RESERVE_ROUTE,
  ROOMS_ROUTE,
} from "../constant/routes";
import { AppBar, Box, Toolbar } from "@mui/material";
import Buttons from "./buttons";

const Header = () => {
  const headerItems = [
    { id: 1, name: "Home", to: HOME_ROUTE },
    { id: 2, name: "Login", to: LOGIN_ROUTE },
    { id: 3, name: "Booking", to: RESERVE_ROUTE },
    { id: 4, name: "Rooms", to: ROOMS_ROUTE },
    { id: 5, name: "Gallery", to: GALLERY_ROUTE },
  ];

  return (
    <>
      <div className="md:hidden bg-orange-300/[0.6] text-white flex justify-between py-2 px-7">
        <h1>ROYAL HOTEL</h1>
        <div>
          <MenuIcon />
        </div>
      </div>
      <div className="hidden md:block">
        <Box sx={{ flexGrow: 1, width: 1 }}>
          <AppBar
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              fontFamily: "Montserrat, serif",
            }}
          >
            <Toolbar style={{ gap: "10px", justifyContent: "space-around" }}>
              <h1>Royal Hotel</h1>
              <div className="flex gap-6">
                {headerItems.map((items) => (
                  <NavLink
                    key={items.id}
                    to={items.to}
                    className={({ isActive }) =>
                      ` hover:text-amber-500 duration-200 ${isActive ? "text-amber-500" : "text-yellow-100"}`
                    }
                  >
                    {items.name}
                  </NavLink>
                ))}
              </div>
              <Buttons width="100px" text="Book now" />
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default Header;
