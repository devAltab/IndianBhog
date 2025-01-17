"use client"
import Image from "next/image";
import facebookpng from "/public/footer/facebook.png";
import instagram from "/public/footer/instagram.png";
import whatsapp from "/public/footer/whatsapp.png";
import twitter from "/public/footer/twitter.png";
import gmail from "/public/footer/gmail.png";
import linkedin from "/public/footer/linkedin.png";
import logo from "/public/logo/pngegg.png"
import Link from "next/link";
export default function Navbar() {


    return (<>
        <footer className="bg-black">
            <div className="sm:flex flex-wrap justify-center p-5 align-middle w-full h-auto">

                <div className="flex flex-col justify-center items-center w-full sm:w-[40%] mb-8 sm:mb-0">
                    <div className="w-72 text-center">
                        <Image className="h-16 m-auto w-16" src={logo} alt="gmail" />
                        <h3 className="text-white text-2xl mt-3">Indian Bhog</h3>
                        <p className="text-white my-3 text-sm">
                        For better experience,download the Indian Bhog app now
                        </p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <Image src={linkedin} height={30} width={30} alt="LinkedIn" />
                            <Image src={facebookpng} height={30} width={30} alt="Facebook" />
                            <Image src={twitter} height={30} width={30} alt="Twitter" />
                            <Image src={whatsapp} height={30} width={30} alt="WhatsApp" />
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap justify-between w-full sm:w-[60%]">
                    <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
                        <ul className="text-white text-center sm:text-left">
                            <li className="my-3">About</li>
                            <Link href="ourteam">
                            <li className="my-3">Our Team</li>
                            </Link>
                            <Link href="contact">
                            <li className="my-3">Contact Us</li>
                            </Link>
                            <Link href="gallery">
                            <li className="my-3">Gallery</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <ul className="text-white text-center sm:text-left">
                        <Link href="service">
                            <li className="my-3">Service</li>
                            </Link>
                            <li className="my-3">Privacy Policy</li>
                            <li className="my-3">Careers</li>
                            <li className="my-3">Terms and Conditions</li>
                        </ul>
                    </div>

                </div>
                
            </div>
            <div className="flex justify-center  space-x-4">
                    <Image src={linkedin} height={30} width={30} alt="LinkedIn" />
                    <Image src={facebookpng} height={30} width={30} alt="Facebook" />
                    <Image src={twitter} height={30} width={30} alt="Twitter" />
                    <Image src={whatsapp} height={30} width={30} alt="WhatsApp" />
                </div>

            <div className="border-t border-gray-700 my-4 mx-auto w-[90%]"></div>


            <div className="text-center h-auto">
                <p className="text-white text-sm">
                    All rights reserved &#xA9; 2024 MyCompany.
                </p>
            </div>
        </footer>
    </>);

}








