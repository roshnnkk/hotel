import React from "react";
import background3 from "../assets/images/3.jpg";
import img1 from "../assets/images/01.jpg";
import img2 from "../assets/images/02.jpg";
import img3 from "../assets/images/03.jpg";
import img4 from "../assets/images/04.jpg";
import img5 from "../assets/images/05.jpg";
import img6 from "../assets/images/06.jpg";
const Gallery = () => {
  const images = [
    { src: img1, title: "Gallery Image 1" },
    { src: img2, title: "Gallery Image 2" },
    { src: img3, title: "Gallery Image 2" },
    { src: img4, title: "Gallery Image 2" },
    { src: img5, title: "Gallery Image 2" },
    { src: img6, title: "Gallery Image 2" },
  ];

  return (
    <div
      className="bg-cover overflow-y-auto p-8 text-white  bg-center w-screen h-screen bg-scroll fixed justify-center  -z-10  "
      style={{ backgroundImage: `url(${background3})` }}
    >
      <h1 className="text-3xl mt-10  font-custom text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white  p-2 rounded-lg shadow-lg hover:scale-90 hover:ease duration-300 "
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
