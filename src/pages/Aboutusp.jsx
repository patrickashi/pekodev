import React from "react"
import renovation3 from "../Assets/renovation3.jpg";
import { useInView } from 'react-intersection-observer';

const Aboutusp = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return(
        <div className="bg-[#FFFEED] w-full pt-32  ">
           <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10 lg:px-16 pb-24">
                <div className="w-full md:w-[700px]">
                    <h2 className="text-2xl">About Us</h2>
                    <h2 className="transition-opacity duration-1000 ease-in-out text-4xl my-6">We Build For People</h2>
                    <p className="mb-6">This is a space to share more about the business: who's behind it, what it does and what this site has to offer.
                        It’s an opportunity to tell the story behind the business or describe a special service or product it offers.
                        You can use this section to share the company history or highlight a particular feature that sets it apart
                        from competitors.
                    </p>
                    <p>Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the
                        brand image and give visitors a taste of the company’s values and personality.
                    </p>
                    
                </div>
                <div className="transition-opacity duration-1000 ease-in-out flex justify-end w-full mt-10 md:mt-0">
                    <img src={renovation3} alt="img" className="w-full md:w-[500px] h-[500px] object-cover rounded-lg" />
                </div>
           </div>

           <div className="transition-opacity duration-1000 bg-[#D6CEAD] ease-in-out flex flex-col md:flex-row gap-4 text-white  justify-between py-20 px-2 md:px-10 lg:px-16">
                <div className="flex justify-start flex-col  bg-[#584E26] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">OUR SERVICES</h2>
                    <p>This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and
                        what makes it unique. Share its core values and what this site has to offer.
                    </p>
                </div>
                <div className="flex justify-start flex-col bg-[#584E26] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">EXPERIENCE</h2>
                    <p>This is the space to introduce visitors to the business or brand. Briefly explain who's behind it,
                        what it does and what makes it unique. Share its core values and what this site has to offer.
                    .</p>
                </div>
                <div className="flex justify-start flex-col bg-[#584E26] py-20 px-10 rounded-md">
                    <h2 className="font-bold mb-6">ACCOUNTABILITY</h2>
                    <p>This is the space to introduce visitors to the business or brand. Briefly explain who's behind it,
                        what it does and what makes it unique. Share its core values and what this site has to offer.
                    </p>
                </div>
            </div>

            <div className="bg-[#2C2713] w-full py-20 px-2 md:px-10 lg:px-16 text-white">
            <h2 className="mb-8 font-bold text-center">TESTIMONIALS</h2>
            <h2 
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out text-3xl mb-8 my-2 text-center ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>Client Success Stories: Hear What Our Clients Say</h2>
            <div
               ref={ref}
               className={`transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row gap-4 text-white  justify-between items-center ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>
                
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>

                
            </div>

            
            
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10 lg:px-16 pb-24 pt-20">
                <div className="w-full md:w-[700px]">
                    <h2 className="text-2xl">OUR MISSION</h2>
                    <h2 className="transition-opacity duration-1000 ease-in-out text-4xl my-6">Building a Sustainable Future</h2>
                    <p className="mb-6">This is a space to share more about the business: who's behind it, what it does and what
                        this site has to offer. It’s an opportunity to tell the story behind the business or describe a special
                        service or product it offers. You can use this section to share the company history or highlight 
                        a particular feature that sets it apart from competitors.
                    </p>
                    <p>Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true 
                        to the brand image and give visitors a taste of the company’s values and personality.
                    </p>
                    
                </div>
                <div className="transition-opacity duration-1000 ease-in-out flex justify-end w-full mt-10 md:mt-0">
                    <img src={renovation3} alt="img" className="w-full md:w-[500px] h-[500px] object-cover rounded-lg" />
                </div>
           </div>


        </div>
    )
}
export default Aboutusp;