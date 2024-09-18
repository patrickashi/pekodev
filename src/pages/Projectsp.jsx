import React from "react"
import cottagedesign from "../Assets/cottagedesign.jpg";
import kitchendesign from "../Assets/kitchendesign.jpg";
import pekodevbg from "../Assets/pekodevbg.jpg";

const Projectsp = () => {
    return(
        <div className="pt-32 w-full pb-24 px-2 md:px-10 lg:px-16">
            <h2 className="mb-8 font-semibold text-xl">OUR PROJECTS</h2>
            <h2 className="text-4xl md:text-5xl mb-16">We Build Projects That Serve</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <div>
                    <img src={pekodevbg} alt="img" className="w-full md:w-[600px] h-[450px] object-cover rounded-lg" />
                    <p className="mt-4 font-semibold mb-10 md:mb-0">Web Design</p>
                </div>
                <div>
                    <img src={pekodevbg} alt="img" className="w-full md:w-[600px] h-[450px] object-cover rounded-lg" />
                    <p className="mt-4 font-semibold">Website Maintenance </p>
                </div>
            </div>
        </div>
    )
}
export default Projectsp;