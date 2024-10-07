import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Correct module imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import foodzbyritaimg from "../Assets/foodzbyritaimg.png";
import remembermeimg from "../Assets/remembermeimg.png";
import hommastonimg from "../Assets/hommastonimg.png";
import schoolzimg from "../Assets/schoolzimg.png";

// Import local images

const Projects = () => {
  const Testimonies = [

    {
      img: foodzbyritaimg,
      name: 'foodzbyrita',
      sitelink: "https://foodzbyrita.vercel.app/",
     
    },
    {
      img: remembermeimg,
      name: 'Remember-me',
      sitelink: "https://rememberme-neon.vercel.app/",
    },
    {
        img: hommastonimg,
        name: 'Hommaston',
        sitelink: "https://www.hommaston.com/",
      },
      {
        img: schoolzimg,
        name: 'Ocohstech',
        sitelink: "https://schoolz.vercel.app/",
      },

 
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]} // Swiper automatically uses these modules
      spaceBetween={50}
      slidesPerView={1}
      navigation // Enables next/prev buttons
      pagination={{ clickable: true }} // Enables pagination
    //   scrollbar={{ draggable: true }} // Enables draggable scrollbar
    >
      {Testimonies.map((testimony, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#e9d5ff] pt-10 pb-10 mx-2 md:mx-0  shadow-lg items-center flex flex-col justify-center ">

                <div className='group bg-[#9333ea] w-[400px] hover:bg-[#9333ea]  rounded-2xl pb-10 px-10 md:px-4 mb-2 hover:scale-105 duration-200 cursor-pointer text-white hover:text-white'>
                    <img src={testimony.img} alt={testimony.title} className="w-full object-cover h-40 rounded-lg mt-[-40px]" />
                    <p className=" mt-2 font-comic">our work</p>
                    <h3 className="group-hover:text-[#f35e5e] duration-200 mt-2 font-luckiest">{testimony.name}</h3>
                    
                    <a className='text-sm '
                        href={testimony.sitelink} 
                        target="_blank" 
                        rel="noopener noreferrer">View site: {testimony.sitelink}
                    </a>
                    
                </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
