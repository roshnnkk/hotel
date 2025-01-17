import React from "react";
import background from "../assets/images/home2-img.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Buttons from "../components/buttons";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center w-screen min-h-screen bg-scroll justify-center -z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <section
          className="font-custom text-white flex flex-col sm:flex-row items-center justify-center sm:gap-20 sm:ml-10  pt-28 md:pt-56
          gap-5 text-center sm:text-left z-2"
        >
          <div className="flex gap-x-2 sm:flex-col xm:gap-y-3">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
          <div className="w-2/4 md:w-3/4 flex flex-col gap-y-4">
            <h2 className="font-semibold xm:text-6xl xs:text-3xl">
              Enjoy Your
              <br /> Dream Vacation
            </h2>
            <p className="xs:text-sm">
              The Royal Hotel is the right choice for visitors who are searching
              for a combination of charm, peace and, comfort
            </p>
            <Buttons width="160px" text="Choose Room" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
