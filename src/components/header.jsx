import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { NavLink } from "react-router";
import { CONTACT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, RESERVE_ROUTE, ROOMS_ROUTE } from "../constant/routes";
import { AppBar, Box, Toolbar } from "@mui/material";
import Buttons from "./buttons";

const Header = () => {
  const headerItems = [
    { id: 1, name: "Home", to: HOME_ROUTE },
    { id: 2, name: "Login", to: LOGIN_ROUTE },
    { id: 3, name: "Booking", to: RESERVE_ROUTE },
    { id: 4, name: "Rooms", to: ROOMS_ROUTE },
    { id: 5, name: "Contact", to: CONTACT_ROUTE }




  ];

  return (
    // <div className="w-screen flex-row-reverse bg-transparent text-lg pt-3 text-white  flex justify-around ">
    //   <div className=" xm:hidden ">
    //     <MenuIcon />
    //   </div>
    //   <h1>ROYAL HOTEL</h1>

    //   <div>
    <div>
        <Box sx={{ flexGrow: 1, width: 1 }}>
        <AppBar style={{ backgroundColor: 'transparent', boxShadow: 'none', }}>
            <Toolbar style={{gap:"10px", justifyContent: "space-around" }}>
              <h1>Royal Hotel</h1>
          <div className="flex gap-6">
          {headerItems.map((items) => (
                <NavLink key={items.id} to={items.to} className={({isActive})=>isActive ? "text-amber-500" : "text-yellow-100" }>
                  {items.name}
                </NavLink>
                
              ))}
          </div>
              <Buttons width="100px" text="Book now"/>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    
  );
};

export default Header;
