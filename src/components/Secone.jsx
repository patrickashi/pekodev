import React, { useEffect, useState } from 'react';
import './animations.css';

const Secone = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      setShowContent(true);
    }, []);

    return (
        <div className="h-screen relative w-full overflow-hidden text-black ">
            <div className="relative z-10 pt-40 px-2 md:px-10 lg:px-16 w-full md:w-120">
                <h2 className={`text-4xl mb-4 md:text-6xl ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>Empowering Your</h2>
                <h2 className={`text-4xl mb-4 md:text-6xl ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>Digital Vision</h2>
                
                <p className={`my-6 text-xl mt-20 md:mt-4 font-thin font ${showContent ? 'p-slide-in' : 'hidden-initially'}`}><i>Experienced & Reliable Developers</i></p>
        
                <button className="bg-[#f35e5e] text-white px-4 py-4 rounded-md mt-40 md:mt-10">GET A QUOTE</button>
            </div>
        </div>
    )
}

export default Secone;