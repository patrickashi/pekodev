import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './animations.css';
import pekodevbg from "../Assets/pekodevbg.jpg";
import { MdArrowOutward } from "react-icons/md";
import '@fontsource/luckiest-guy'; 
import '@fontsource/yatra-one';
import new_bg from "../Assets/new_bg.png";

const Secone = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      setShowContent(true);
    }, []);

    return (
        <div className="h-screen flex flex-col md:flex-row w-full  text-black "
        style={{backgroundImage: `url(${new_bg})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
            <div className="pt-40 px-2 md:px-10 lg:px-16 ">
                <h2 className={`text-4xl mt-4 mb-4 md:text-6xl font-luckiest text-[#ff8904] ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>Empowering Your</h2>
                <h2 className={`text-4xl mb-4 md:text-6xl font-luckiest text-[#ff8904] ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>Digital Vision</h2>
                
                <p className={`my-6 text-xl mt-10 md:mt-4 text-black font-semibold ${showContent ? 'p-slide-in' : 'hidden-initially'}`}><i>Experienced & Reliable Developers</i></p>

                <Link to="/Quotep">
                    
                </Link>
                <a href='http://wa.me/2347038905049'>
                    <button className="bg-[#ff8904] text-white px-4 py-4 rounded-md mt-20 md:mt-10 flex font-luckiest">GET A QUOTE<MdArrowOutward size={20}/></button>
                </a>
                
            </div>

            {/* <div className='flex py-10 md:py-20 px-2 md:px-20'>
                <img src={pekodevbg} className='flex justify-center mt-10 ml-0 md:ml-16 w-full md:w-80 h-100 rounded-md' alt="bg" />
            </div> */}
        </div>
    )
}

export default Secone;