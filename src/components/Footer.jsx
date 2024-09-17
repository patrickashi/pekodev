import React from "react"
import pekodevnew from "../Assets/pekodevnew.png";

const Footer = () => {
    return (
        <div className="  duration-200 text-black ">
            <div className="flex gap-16 flex-col px-2 md:px-10 lg:px-16 py-10 md:flex-row bg-[#e9d5ff] justify-between pb-4">
                <div>
                    <div className="flex align-middle hover:text-black ">
                        <img src={pekodevnew} className="w-40" alt="logo" />
                    </div>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Menu</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Services</li>
                        <li>Projects</li>
                        <li>About us</li>
                    </ul>
                </div>
               
                <div>
                    <h1 className="font-bold mb-4">Contact</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Ministry of works Ogoja</li>
                        <li>Cross river Nigeria.</li>
                        <li>+234 70 3890 5049</li>
                        <li>patrickpeko1@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Social</h1>
                    <ul className="flex flex-col gap-2">
                        <li>whatsapp</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
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