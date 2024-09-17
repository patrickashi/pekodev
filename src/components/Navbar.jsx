import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
// import blackbullLogo from "../Assets/blackbullLogo.jpg"
import { Link } from "react-router-dom";
import pekodevnew from "../Assets/pekodevnew.png";



const  Navbar = ({ handleContactClick, location }) => {
    const isHomePage = location.pathname === '/';
    const navBgClass = isHomePage ? 'bg-transparent' : 'bg-black';

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }

    const handleLinkClick = (sectionId) => {
        setNav(!nav); // Close the navbar
        if (sectionId) {
          document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        }
      };
      
    return ( 
        <div className={`flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-50 py-2 px-2 md:px-6 text-black ${navBgClass}`}>
            <div>
                <Link to="/">
                    <img className="w-40" src={pekodevnew}  size={20} alt="logo" />
                </Link>
            </div>
            
            <div>
                <ul className="hidden mobile:hidden  md:flex lg:flex xl-flex 2xl:flex text-black mx-auto  ">
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Servicesp">Services</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Projectsp">Projects</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Aboutusp">About us</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer bg-[#f35e5e] text-white rounded-lg" >
                        <Link to="/Quotep">Get a Quote</Link>
                    </li>
                    
                </ul>
            </div>

            <button className="block md:hidden p-4 hover:underline hover:cursor-pointer bg-[#f35e5e] text-white rounded-lg text-xs">GET A QUOTE</button>

            <div onClick={handleNav} className="mobile:block md:hidden 2xl:hidden lg:hidden xl:hidden z-20">
                {nav ? <AiOutlineClose className="text-black z-80" size={20}/> : <AiOutlineMenu className="white " size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "fixed bg-white left-0 top-0 h-full w-[90%] ease-out duration-500" : "fixed left-[-100%]"}>

                <div className="flex align-middle mt-4 ml-2 ">
                    <Link to="/">
                        <img className="w-40" src={pekodevnew}  size={20} alt="logo" />
                    </Link>
                </div>

                <ul className="flex flex-col p-4 my-6 gap-16 text-black">
                    <li className="p-4 border-l border-blue-600" onClick={() => { handleLinkClick() } }>
                    <Link to="/Servicesp">Services</Link>
                    </li>
                    <li className="p-4 border-l border-green-600" onClick={() => { handleLinkClick() } }>
                        <Link to="/Projectsp">Projects</Link>
                    </li>
                    <li className="p-4 border-l border-red-600" onClick={() => { handleLinkClick() } }>
                        <Link to="/Aboutusp">About us</Link> 
                    </li>
                    <li className="p-4 border-l border-pink-600" onClick={() => { handleLinkClick() }}>
                        <Link to="/Quotep">Get a Quote</Link>
                    </li>
                </ul>

               
            </div>
        </div>
     );
}
 
export default Navbar;