"use client"

import Link from "next/link"; // Importing the Link component for navigation
import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";

const AiOutlineMenu = AiIcons.AiOutlineMenu;
const AiOutlineClose = AiIcons.AiOutlineClose;

const navLinks = [
    { title: "Home", path: "/" },  // Assuming Home is the index or main page
    { title: "Plan", path: "/create-itinerary" },  // Plan page
    { title: "Saved Trips", path: "/saved-trips" },  // Saved Trips page
    { title: "Contact Us", path: "/contact" }  // Contact page
];

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
      setNav(!nav);
    };
  
    const closeNav = () => {
      setNav(false);
    };

    return (
        <div className="z-[100] fixed top-0 left-0 w-full text-white font-bold">
            <div
                className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl
                hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto"
            >
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <button 
                                    className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
                                    onClick={closeNav}  // Close the mobile menu after clicking a link
                                >
                                    {link.title}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div
                onClick={toggleNav}
                className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300
                ${nav ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className="flex flex-col items-center justify-center space-y-8 h-full">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <button
                                    onClick={closeNav}  // Close the mobile menu after clicking a link
                                    className="text-5xl"
                                >
                                    {link.title}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
