import React from "react"
import pekodevnew from "../Assets/pekodevnew.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaRegFileCode } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { TiGroup } from "react-icons/ti";
import '@fontsource/luckiest-guy';

const Footer = () => {
    return (
        <div className="duration-200 text-black ">
            <div className="flex gap-16 flex-col px-2 md:px-10 lg:px-16 py-10 md:flex-row bg-[#e9d5ff] justify-between pb-4">
                <div className="">
                    <div className="flex align-middle justify-end hover:text-black ">
                        <img src={pekodevnew} className="w-40" alt="logo" />
                    </div>
                    <div className="mt-4">
                        <form action="https://formspree.io/f/xzzbpyro" method="POST">
                            <div className="flex flex-col gap-2 ">
                                <input type="email" name="email" required placeholder="name@gmail.com" className="pl-2 text-xs py-1 rounded-sm" />
                                <button type="submit" className="bg-[#9333ea] text-white rounded-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <h1 className=" mb-4 font-luckiest">Menu</h1>
                    <ul className="flex flex-col gap-2">
                        <a href="/Aboutusp">
                            <li>
                                <div className="flex align-middle">
                                    <TiGroup className="mt-1 mr-1 text-slate-800 "/>
                                    About us
                                </div>
                            </li>
                        </a>
                        <a href="/Projectsp">
                            <li>
                                <div className="flex align-middle">
                                    <GrProjects className="mt-1 mr-1 text-emerald-500 "/>
                                    Projects
                                </div>
                            </li>
                        </a>
                        <a href="/Servicesp">
                            <li>
                                <div className="flex align-middle">
                                    <FaRegFileCode className="mt-1 mr-1 text-purple-800 "/>
                                    Services
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
               
                <div>
                    <h1 className="font-luckiest mb-4">Contact</h1>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <div className="flex align-middle">
                                <FaLocationDot className="mt-1 mr-1 text-green-400"/>
                                Ministry of works ogoja
                            </div>
                        </li>
                        <li>
                            <div className="flex align-middle ">
                                <FaLocationDot className="mt-1 mr-1 text-green-400"/>
                                Cross river Nigeria.
                            </div>
                        </li>
                        <li>
                            <div className="flex align-middle ">
                                <MdCall className="mt-1 mr-1 text-gold"/>
                                +234 70 3890 5049
                            </div>
                        </li>
                        <li>
                            <div className="flex align-middle ">
                                <CiMail className="mt-1 mr-1 text-sky-800"/>
                                patrickpeko1@gmail.com
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-luckiest mb-4">Social</h1>
                    <ul className="flex flex-col gap-2">
                        <a href="http://wa.me/2347038905049">
                            <li>
                                <div className="flex align-middle">
                                    <FaWhatsapp className="mt-1 mr-1 text-emerald-700" />
                                    Whatsapp
                                </div>
                            </li>
                        </a>
                        <a href="https://www.instagram.com/patrickpeko_">
                            <li>
                                <div className="flex">
                                    <FaInstagram className="mt-1 mr-1 text-red-600"/>
                                    Instagram
                                </div>
                            </li>
                        </a>
                        
                        <a href="https://www.TikTok.com/@patrickpeko_">
                            <li>
                                <div className="flex">
                                    <FaTiktok className="mt-1 mr-1"/>
                                    Tiktok
                                </div>
                            </li>
                        </a>
                        <a href="https://www.youtube.com/@patrickpeko">
                            <li>
                                <div className="flex">
                                    <FaYoutube className="mt-1 mr-1 text-red-600"/>
                                    Youtube
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between py-4 px-2 md:px-10 lg:px-16 text-xs text-black bg-[#d8b4fe]">
                <div>Pricacy Policy</div>
                <div>©2024 pekodev</div>
            </div>
        </div>
    )
}

export default Footer;