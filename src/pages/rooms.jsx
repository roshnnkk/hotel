import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import data from "../data/rooms.json";
import Buttons from "../components/buttons";
import { MORE_INFO_ROUTE } from "../constant/routes";
import { useNavigate } from "react-router";

const RoomSlider = () => {
  const [imagePaths, setImagePaths] = useState({});
  const [currentBackground, setCurrentBackground] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const loadImages = async () => {
      const paths = {};
      for (const room of data.rooms) {
        const imagePath = (await import(`../assets/images/${room.img}`))
          .default;
        paths[room.img] = imagePath;
      }
      setImagePaths(paths);
      setCurrentBackground(paths[data.rooms[0].img]);
    };
    loadImages();
  }, []);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.activeIndex;
    const currentSlide = data.rooms[currentSlideIndex];
    setCurrentBackground(imagePaths[currentSlide.img]);
  };

  const GoForMore = (roomId) => {
    const room = data.rooms.find((room) => room.id === roomId);
    navigate(`/rooms/${roomId}`, {
      state: { room, imagePath: imagePaths[room.img] },
    });
  };

  return (
    <div>
      <div
        className=" blur-sm bg-cover bg-center w-screen h-screen bg-scroll fixed justify-center -z-10"
        style={{ backgroundImage: `url(${currentBackground})` }}
      ></div>
      <section className="pt-16">
        <div className="w-[80%] xm:w-[50%] md:w-[80%] m-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {data.rooms.map((room) => (
              <SwiperSlide key={room.id}>
                <div className="flex flex-col-reverse  min-h-screen md:flex-row lg:flex-row items-center">
                  <div
                    className="text-white flex flex-col gap-3"
                    style={{ flex: 1 }}
                  >
                    <h3
                      className="text-6xl text-[#CA8E46]"
                      style={{ fontFamily: "Mrs Saint Delafield" }}
                    >
                      {room.title}
                    </h3>
                    <h4 className="text-3xl font-custom font-extrabold">
                      {room.name}
                    </h4>
                    <p>{room.caption}</p>

                    <Buttons
                      width={"150px"}
                      text={"More details"}
                      onClick={() => GoForMore(room.id)}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <img
                      className="rounded"
                      src={imagePaths[room.img]}
                      alt={room.name}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default RoomSlider;
