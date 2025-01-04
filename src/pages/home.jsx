import React from "react";
import background from "../assets/images/home-img.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Buttons from "../components/buttons";
const Home = () => {
  return (
    <div
      className="bg-cover bg-center w-screen h-screen bg-scroll fixed justify-center  -z-10  "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <section
          className="text-white  flex flex-col xm:flex-row items-center justify-center sm:gap-20 sm:ml-10 lg:mt-80 xs:mt-[180px]
        gap-5 text-center sm:text-left
        z-2"
        >
          <div className="flex gap-x-2 xm:flex-col xm:gap-y-3">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
          <div className="w-2/4 md:w-3/4 flex flex-col gap-y-4">
            <h2 className=" xm:text-6xl xs:text-3xl ">
              Enjoy Your
              <br /> Dream Vacation
            </h2>
            <p className="xs:text-sm">
              The Seaside Hotel is the right choice for visitors who are
              searching for a combination <br />
              of charm, peace and, comfort
            </p>
            <Buttons />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
