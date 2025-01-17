"use client"
import Link from "next/link";
 import Image from "next/image";
import React, { useRef } from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import logo from "/public/logo/pngegg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
export default function Navbar() {
    const [isVisible, setisVisible] = useState(false);
    const cut = () => {
        setisVisible(!isVisible)
    }
    const dot = () => {
        setisVisible(!isVisible)
    }
    return (
        <>
            <nav className="">
                <div className="flex justify-between 0 h-16 p-2">
                    <div className="flex rounded-2xl bg-gray-300">
                        <span className="m-2"> <Image src={logo}height={50} width={50} alt="img"/></span>
                        {/* <span className="   font-bold text-purple-600 my-auto text-xl ">&lt;/&gt;Md Altab</span> */}
                    </div>
                    <div className=" text-lg p-auto">
                        <ul className="flex text-black  p-2 ">
                            <Link href="/gallery">
                                <li className=" md:inline hidden px-5">Gallery</li>
                            </Link>
                           
                            <Link href="/menu">
                                <li className="md:inline hidden px-5">menu</li>
                            </Link>
                            <Link href="/#">
                                <li className="md:inline hidden px-5">Home delivery</li>
                            </Link>
                            <Link href="/recipes">
                            <li className="md:inline hidden px-5 ">Recipes</li>
                            </Link>
                            <Link href="/login">
                                <button className="bg-purple-800 rounded-xl px-3 mx-2 text-white h-9">Login</button>
                            </Link>
                            <Link href="signup">
                                <button className="bg-purple-800 rounded-xl px-3 mx-2 text-white h-9">signup</button>
                            </Link>
                            
                        </ul>
                    </div>


                </div>


                <div className="">
                    <div className={`${isVisible ? 'hidden' : 'block'} md:hidden mx-4`} onClick={(e) => { dot() }}>
                        <FontAwesomeIcon
                            icon={faBars}
                            className="size-6 text-purple-600"
                            alt=""
                        />
                    </div>
                    <div className={`${isVisible ? 'blocl' : 'hidden'} md:hidden mx-4`} onClick={(e) => { dot() }}>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="size-6 text-purple-600"
                            alt=""
                        />
                    </div>
                    <div className={`md:hidden  flex absolute top-[65px] right-4`}>

                        <FontAwesomeIcon
                            icon={faSearch}
                            className="size-6 text-purple-600"
                            alt=""
                        />
                    </div>
                    <div
                        className={`sm:hidden bg-slate-950  absolute w-full bg-slate-250  transition-all duration-500 ease-in-out ${isVisible ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                            } overflow-hidden`}
                    >
                        <ul className=" text-lg w-48 m-6 p-2">
                        <Link href="/#">
                            <li className="text-white font-bold p-3">Home</li>
                            </Link>
                            <Link href="/service">
                            <li className="text-white font-bold p-3">Service</li>
                            </Link>
                            <Link href="/#">
                            <li className="text-white font-bold p-3">About</li>
                            </Link>
                            <Link href="/contactus">
                            <li className="text-white font-bold p-3">Contact</li>
                            </Link>
                            <Link href="/recipes">
                            <li className="text-purple-800 font-bold px-3 ">Recipes</li>
                            </Link>
                            
                        </ul>
                        {/* <FontAwesomeIcon icon={faSearch}
                            className="text-purplr-500 animate-bounce "
                        /> */}
                    </div>

                    <div className="border-t h-7 border-purple-300 hidden md:block">
                        <ul className="flex text-xl justify-center p-2 ">
                        <Link href="/#">
                            <li className="text-purple-800 font-bold px-3 ">Home</li>
                            </Link>
                        <Link href="/service">
                            <li className="text-purple-800 font-bold px-3 ">Srevice</li>
                            </Link>
                        <Link href="/#">
                            <li className="text-purple-800 font-bold px-3 ">About</li>
                            </Link>
                        <Link href="/contact">
                            <li className="text-purple-800 font-bold px-3 ">Contact</li>
                            </Link>
                        <Link href="/recipes">
                            <li className="text-purple-800 font-bold px-3 ">Recipes</li>
                            </Link>
                       

                        </ul>
                        <div className="flex absolute top-[70px] right-4">


                        </div>

                    </div>
                </div>

                <Marquee className=" shadow-lg border-purple-300 my-4 border-t"><h3 className=" md:text-2xl text-black text-sm">Flat 15% instant discount upto Rs.200 on minimum transaction value Rs.800</h3></Marquee>


            </nav >
        </>
    );

}





