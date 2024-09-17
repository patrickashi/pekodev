import React from "react"
import { useInView } from 'react-intersection-observer';
import './animations.css';

const Secfive = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className="bg-[#fffeed] w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
            <h2 className="mb-8 font-bold">Our services</h2>
            <h2 
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out text-4xl mb-8 w-full md:w-[600px] my-2 ${inView ? 'slide-in-from-left' : 'opacity-0'}`}>We Offer a Range of Remodeling Services to Meet Every Need</h2>
            <div
               ref={ref}
               className={`transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row gap-4 text-white  justify-between ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>
                <div className="flex justify-start flex-col  bg-[#584E26] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">KITCHEN REMODELING</h2>
                    <p>Describe the service and how customers or clients can benefit from it. It’s an opportunity to
                         add a short description with relevant details, like pricing, duration and how to book.
                    </p>
                </div>
                <div className="flex justify-start flex-col bg-[#584E26] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">BATHROOM REMODELING</h2>
                    <p>Describe the service and how customers or clients can benefit from it. It’s an opportunity to
                         add a short description with relevant details, like pricing, duration and how to book
                    .</p>
                </div>
                <div className="flex justify-start flex-col bg-[#584E26] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">HOME ADDITIONS</h2>
                    <p>Describe the service and how customers or clients can benefit from it. It’s an opportunity to
                         add a short description with relevant details, like pricing, duration and how to book.
                    </p>
                </div>

                
            </div>
            <button className="bg-[#171200] text-white px-4 py-2 rounded-lg mt-8 mb-10">ALL SERVICES</button>
        </div>
    )
}

export default Secfive;