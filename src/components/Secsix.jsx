import React from "react"
import { useInView } from 'react-intersection-observer';
import './animations.css';
import '@fontsource/luckiest-guy';
import Testimonies from "./Testimonies";
import '@fontsource/monoton';

const Secsix = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div>
            <p className='text-center  mt-10 mb-6'>
            <span className='bg-[#9333ea] text-white px-2 py-1 rounded-md font-luckiest'>Testimonies</span>
            </p>
            <p className='text-4xl text-center font-luckiest mb-4'>Our Happy Clients </p>
            <Testimonies />
        </div>
    )
}

export default Secsix;