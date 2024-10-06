import React from "react"
import { useInView } from 'react-intersection-observer';
import './animations.css';
import '@fontsource/luckiest-guy';

const Secsix = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className="bg-[#9333ea] w-full py-20 px-2 md:px-10 lg:px-16 text-white">
            <h2 className="mb-8 font-luckiest text-center">OUR HAPPY PATRONS</h2>
            <h2 
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out text-3xl mb-8 my-2 text-center ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>We Treat Every Client Like a Family</h2>
            <div
               ref={ref}
               className={`transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row gap-4 text-white  justify-between items-center ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>
                
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                
            </div>
            
        </div>
    )
}

export default Secsix;