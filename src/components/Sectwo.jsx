import React from "react"
import { useInView } from 'react-intersection-observer';
import './animations.css';
import pekodevbg from "../Assets/pekodevbg.jpg";
import '@fontsource/luckiest-guy'; 

const Sectwo = () => {
    
    
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className="bg-[#9333ea] text-white w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
           <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-[700px]">
                    <h2 className="text-5xl font-luckiest">About our company</h2>
                    <h2
                     ref={ref}
                     className={`transition-opacity duration-1000 ease-in-out text-2xl my-6 ${inView ? 'slide-in-from-left' : 'opacity-0'}`}>We provide professional solutions to deliver safe & efficient projects</h2>
                    <p>Welcome to pekodev, where we create custom websites and web applications tailored to your needs.
                        Our team is dedicated to delivering high-quality, visually appealing, and user-friendly digital solutions.
                        Let's bring your vision to life with creativity and integrity.
                    </p>
                    <button className="bg-[#f35e5e] text-white px-4 py-2 rounded-lg mt-4 font-luckiest">READ MORE</button>
                </div>
                <div
                   ref={ref}
                   className={`transition-opacity duration-1000 ease-in-out flex justify-end w-full mt-10 md:mt-0 ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>
                    <img src={pekodevbg} alt="img" className="w-full md:w-[500px] h-[500px] object-cover rounded-lg" />
                </div>
           </div>
        </div>
    )
}

export default Sectwo;