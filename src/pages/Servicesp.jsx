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
                    <p>Describe the service and how customers or clients can benefit from it. It’s an opportunity to
                         add a short description with relevant details, like pricing, duration and how to book.
                    </p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">WEB HOSTING</h2>
                    <p>Describe the service and how customers or clients can benefit from it. It’s an opportunity to
                         add a short description with relevant details, like pricing, duration and how to book
                    .</p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">UI/UX DESIGN</h2>
                    <p>Describe the service and how customers or clients can benefit from it. It’s an opportunity to
                         add a short description with relevant details, like pricing, duration and how to book.
                    </p>
                </div>

                
            </div>


            <div className="transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row gap-4 text-white  justify-between mt-10 ">
                <div className="flex justify-start flex-col  bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">DATABASE MODELLING</h2>
                    <p>Describe the service and how customers or clients can benefit from it. It’s an opportunity to
                         add a short description with relevant details, like pricing, duration and how to book.
                    </p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">SEO</h2>
                    <p>Describe the service and how customers or clients can benefit from it. It’s an opportunity to
                         add a short description with relevant details, like pricing, duration and how to book
                    .</p>
                </div>
                <div className="flex justify-start flex-col bg-[#9333ea] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">E-COMMERCE SOLUTIONS</h2>
                    <p>Describe the service and how customers or clients can benefit from it. It’s an opportunity to
                         add a short description with relevant details, like pricing, duration and how to book.
                    </p>
                </div>

                
            </div>

        </div>
        
    )
}

export default Servicesp;