import React from "react"
import renovation3 from "../Assets/renovation3.jpg";
import { useInView } from 'react-intersection-observer';
import pekodevbg from "../Assets/pekodevbg.jpg";
import Testimonies from "../components/Testimonies";
import '@fontsource/creepster';

const Aboutusp = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return(
        <div className="w-full pt-32  ">
           <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10 lg:px-16 pb-24">
                <div className="w-full md:w-[700px]">
                    <h2 className="text-2xl font-luckiest">About Us</h2>
                    <h2 className="transition-opacity duration-1000 ease-in-out text-3xl my-6 font-creepster">We Build For People</h2>
                    <p className="mb-6">Welcome to pekodev, where passion meets innovation. Founded by dedicated Graduates,
                        we specialize in delivering exceptional web solutions that empower businesses online. Our journey
                        started with a vision to simplify digital experiences, evolving into a full-service web development agency.
                    </p>
                    <p>What sets us apart is our commitment to excellence and customer satisfaction. We combine cutting-edge
                        technologies with creative design, crafting tailored solutions that resonate with users.
                        Explore our site to discover our services and the values that drives us.
                        Let’s create something that truly reflects your brand.
                    </p>
                    
                </div>
                <div className="transition-opacity duration-1000 ease-in-out flex justify-end w-full mt-10 md:mt-0">
                    <img src={pekodevbg} alt="img" className="w-full md:w-[500px] h-[500px] object-cover rounded-lg" />
                </div>
           </div>

           <div className="transition-opacity duration-1000 bg-[#e9d5ff] ease-in-out flex flex-col md:flex-row gap-4 text-white  justify-between py-20 px-2 md:px-10 lg:px-16">
                <div className="flex justify-start flex-col  bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-luckiest mb-6">OUR SERVICES</h2>
                    <p>Our services are built on years of experience in web development, design, and digital strategy. We prioritize accountability, ensuring transparent communication
                        and delivering results that meet your goals. Trust us to bring expertise and integrity to every project.
                    </p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-luckiest mb-6">EXPERIENCE</h2>
                    <p>With years of experience in the industry, our team has successfully delivered a wide range of projects. We stay updated with the latest trends and technologies,
                        ensuring that our solutions are innovative and effective. Your success is our priority.
                    .</p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-luckiest mb-6">ACCOUNTABILITY</h2>
                    <p>We believe in accountability at every step of the project. Our team maintains open communication, providing regular updates and clear timelines. You can trust us
                        to take responsibility for our work and ensure that your vision is realized.
                    </p>
                </div>
            </div>

            <div>
                <p className='text-center  mt-10 mb-6'>
                  <span className='bg-[#9333ea] text-white px-2 py-1 rounded-md font-luckiest'>Testimonies</span>
                </p>
                <p className='text-4xl text-center font-luckiest mb-4'>Our Satisfied Customers</p>
                <Testimonies />
            </div>
           

            <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10 lg:px-16 pb-24 pt-20">
                <div className="w-full md:w-[700px]">
                    <h2 className="text-2xl font-luckiest">OUR MISSION</h2>
                    <h2 className="transition-opacity duration-1000 ease-in-out text-4xl my-6 font-creepster">Building a Sustainable Future</h2>
                    <p className="mb-6">At pekodev, our mission is to empower businesses with innovative web solutions
                        that enhance their online presence and drive success. We are dedicated to delivering high-quality,
                        user-friendly experiences that engage users and foster growth.
                    </p>
                    <p>We prioritize collaboration and integrity in every project, aiming to build lasting relationships with
                        our clients. By understanding their unique needs and goals, we help them navigate the digital
                        landscape and achieve their vision with confidence.
                    </p>
                    
                </div>
                <div className="transition-opacity duration-1000 ease-in-out flex justify-end w-full mt-10 md:mt-0">
                    <img src={pekodevbg} alt="img" className="w-full md:w-[500px] h-[500px] object-cover rounded-lg" />
                </div>
           </div>


        </div>
    )
}
export default Aboutusp;