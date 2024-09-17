import React, { useState, useEffect } from 'react';
import renovation1 from "../Assets/renovation1.jpg";
import webapp01 from "../Assets/webapp01.jpg";

const images = [renovation1, webapp01];

const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center ">
      <div className="absolute top-0 w-full md:w-[400px] h-full bg-cover bg-center transition-transform duration-1000 rounded-lg"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-75 focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-75 focus:outline-none"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Imageslider;
