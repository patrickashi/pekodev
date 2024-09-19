import React from "react"
import './animations.css';

const Servicesp = () => {
    return (
        <div className="bg-white w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
            <h2 className="mb-8 font-semibold text-2xl">Our services</h2>
            <h2 className="transition-opacity duration-1000 ease-in-out text-4xl mb-8 w-full md:w-[600px] my-2">We Offer a Range of Services to Meet Your Needs</h2>
            <div className="transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row gap-4 text-white  justify-between">
                <div className="flex justify-start flex-col  bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">WEBSITE MAINTENANCE</h2>
                    <p>Ensure your site stays updated, secure, and running smoothly.
                        We offer flexible maintenance plans to fit your needs, with
                        regular updates and support. Contact us to learn more and
                        keep your site in top shape.
                    </p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">WEB HOSTING</h2>
                    <p>Our web hosting services ensure your website is fast, secure, and always online.
                        We provide reliable hosting solutions with high uptime, regular backups,
                        and strong security measures, so your site runs smoothly around the clock.
                    .</p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">UI/UX DESIGN</h2>
                    <p>Our UI/UX design services focus on creating intuitive, user-friendly interfaces
                        that enhance the overall experience. We ensure that every design is visually
                        appealing and functional, keeping user satisfaction and ease of navigation
                        at the forefront.
                    </p>
                </div>

                
            </div>


            <div className="transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row gap-4 text-white  justify-between mt-10 ">
                <div className="flex justify-start flex-col  bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">DATABASE MODELLING</h2>
                    <p>We offer expert database modeling services to design efficient, scalable databases tailored
                        to your business needs. Our solutions ensure data integrity, optimized performance,
                        and seamless integration with your applications.
                    </p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">SEO</h2>
                    <p>Our SEO services help your website rank higher on search engines, driving more organic traffic
                        and increasing visibility. We optimize your content and site structure to ensure you reach
                        your target audience effectively.
                    .</p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">E-COMMERCE SOLUTIONS</h2>
                    <p>We provide comprehensive e-commerce solutions tailored to your business needs. From user-friendly
                        online stores to secure payment integrations, we help you build a seamless shopping experience
                        that drives sales and enhances customer satisfaction.
                    </p>
                </div>

                
            </div>

        </div>
        
    )
}

export default Servicesp;