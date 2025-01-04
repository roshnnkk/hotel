import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { NavLink } from "react-router";

const Header = () => {

  return (
    <div className="w-screen flex-row-reverse  text-lg pt-3 text-white h-10 flex justify-around ">
      <div className=" bg-transparent xm:hidden ">
        <MenuIcon />
      </div>
      <h1>ROYAL HOTEL</h1>
      
        
      
    </div>
  );
};

export default Header;
