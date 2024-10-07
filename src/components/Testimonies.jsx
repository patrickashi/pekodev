import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Correct module imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@fontsource/monoton';
import '@fontsource/alex-brush'; 

// Import local images

const Testimonies = () => {
  const Testimonies = [

    {
    //   img: ohasoup,
      name: 'Jessie',
      description: "The website built for my business works seamlessly. Everything from the navigation to the interactive elements is intuitive and functional. It's clear a lot of thought went into making it user-friendly" ,

     
    },
    {
    //   img: rice1,
      name: 'Maurine O.',
      description: "The speed of my new website is amazing. Pages load almost instantly, even with high-quality images and content. This has definitely improved the user experience for my customers.",
      
    },
    {
        // img: chickenstew,
        name: 'J. Castro',
        description: "I’m so impressed with the clean and modern design of my site. The attention to detail in the styling is spot on, and it perfectly aligns with my brand. My visitors love the look!",
        
    },
    {
        // img: chickenstew,
        name: 'Osha Aniseya',
        description: "The page designs are professional and engaging. Every section is well-placed, making the site both visually appealing and easy to navigate. The layout makes it a pleasure to use!",
        
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
          <div className="bg-white pt-10 pb-10 mx-2 md:mx-0  shadow-lg items-center flex flex-col justify-center ">

                <div className='group bg-white w-[400px]  border border-gray-400 hover:border-none hover:bg-[#9333ea]  rounded-2xl pb-10 px-10 md:px-4 mb-2 hover:scale-105 duration-200 cursor-pointer hover:text-white'>
                    {/* <img src={testimony.img} alt={testimony.title} className="w-full object-cover h-20 rounded-lg mt-[-40px]" /> */}
                    <p className=" mt-2 font-alex">what our clients say</p>
                    <h3 className="group-hover:text-white mt-2 font-luckiest">{testimony.name}</h3>
                    <p>{testimony.description}</p>
                    {/* <p className='font-luckiest'>N{food.price}</p> */}
                    
                </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonies;
