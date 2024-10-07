import React from "react"
import { useInView } from 'react-intersection-observer';
import Imageslider from "./Imageslider";
import '@fontsource/luckiest-guy';
import Projects from "./Projects";



const Secfour = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className="bg-[#e9d5ff] w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
           <h2 className="text-xl font-luckiest">FEATURED SITES</h2>
           <h2
           ref={ref}
           className={`transition-opacity duration-1000 ease-in-out text-4xl my-2 font-luckiest ${inView ? 'slide-in-from-left' : 'opacity-0'}`}>We Develop WebServices You'll Love</h2>
           <button className="bg-[#f35e5e] text-white px-4 py-2 rounded-lg mt-4 mb-10 font-luckiest">ALL PROJECTS</button>
           <Projects />
        </div>
    )
}

export default Secfour;