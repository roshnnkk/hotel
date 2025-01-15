import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { GALLERY_ROUTE, HOME_ROUTE, RESERVE_ROUTE, ROOMS_ROUTE } from "../constant/routes";

const Footer = () => {
  const footerItems = [
    {
      title: "Contact Us",
      content: (
        <div className="text-xs">
          <p>123 Street Name</p>
          <p>City, Country</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: info@example.com</p>
        </div>
      ),
    },
    {
      title: "Quick Links",
      content: (
        <ul className="text-xs">
          <li>
            <a href={HOME_ROUTE} className="hover:text-amber-500">
              Home
            </a>
          </li>
          <li>
            <a href={ROOMS_ROUTE} className="hover:text-amber-500">
              Rooms
            </a>
          </li>
          <li>
            <a href={RESERVE_ROUTE} className="hover:text-amber-500">
              Booking
            </a>
          </li>
          <li>
            <a href={GALLERY_ROUTE} className="hover:text-amber-500">
              Gallery
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: "Follow Us",
      content: (
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-amber-500">
            <FacebookIcon />
          </a>
          <a href="#" className="text-gray-400 hover:text-amber-500">
            <TwitterIcon />
          </a>
          <a href="#" className="text-gray-400 hover:text-amber-500">
            <InstagramIcon />
          </a>
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-gray-800 text-white  p-5">
      <div className="container mx-auto flex justify-center md:justify-around gap-5 md:gap-20">
        {footerItems.map((item, index) => (
          <div key={index} className="mb-6 sm:mb-0">
            <h3 className="text-xs  md:text-sm font-bold mb-4 text-amber-500">
              {item.title}
            </h3>
            {item.content}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
