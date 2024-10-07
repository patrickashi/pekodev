import React from "react"
import { useInView } from 'react-intersection-observer';
import './animations.css';
import '@fontsource/luckiest-guy';

const Secfive = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className="bg-white w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
            <h2 className="mb-8 font-luckiest text-xl">Our services</h2>
            <h2 
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out text-4xl mb-8 w-full md:w-[600px] my-2 font-luckiest ${inView ? 'slide-in-from-left' : 'opacity-0'}`}>We Offer a Range of Web Services to Meet Every Need</h2>
            <div
               ref={ref}
               className={`transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row gap-4 text-white  justify-between ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>
                <div className="flex justify-start flex-col  bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-luckiest mb-6">WEBSITE MAINTENANCE</h2>
                    <p>Ensure your site stays updated, secure, and running smoothly.
                        We offer flexible maintenance plans to fit your needs, with
                        regular updates and support. Contact us to learn more and
                        keep your site in top shape.
                    </p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-luckiest mb-6">WEB DEVELOPMENT</h2>
                    <p>We build modern websites and web apps using the latest technologies like Next.js,
                        React, Django, and Tailwind CSS for styling. Our expertise spans both front and
                        backend development, ensuring fast, secure, and scalable digital solutions
                        tailored to your needs.
                    </p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-luckiest mb-6">UI/UX DESIGN</h2>
                    <p>Our UI/UX design services focus on creating intuitive, user-friendly interfaces
                        that enhance the overall experience. We ensure that every design is visually
                        appealing and functional, keeping user satisfaction and ease of navigation
                        at the forefront.
                    </p>
                </div>

                
            </div>
            <button className="bg-[#f35e5e] text-white px-4 py-2 rounded-lg mt-8 mb-10 font-luckiest">ALL SERVICES</button>
        </div>
    )
}

export default Secfive;