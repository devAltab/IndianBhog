"use client"
import Link from "next/link"
import Image from "next/image";
import gallery1 from "/public/gallery/gallery1.jpg"
import gallery2 from "/public/gallery/gallery2.jpg"
import gallery3 from "/public/gallery/gallery3.jpg"
import gallery4 from "/public/gallery/gallery4.jpg"
import gallery5 from "/public/gallery/gallery5.jpg"
import gallery6 from "/public/gallery/gallery6.jpg"
export default function gallery(){

return(<>
     <div className="bg-gray-100 m-5">
            <div className=" bg-gray-100 max-w-[1320px] mx-auto">
              <h1 className="text-4xl text-center py-5 text-black">Gallery</h1>
            </div>
    
            <div className="max-w-[1320px]  mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-20px bg-gray-100">
              <div className="overflow-hidden shadow-2xl rounded-2xl">
                <Image
                  src={gallery1}
                  alt=""
                  className="hover:scale-125 h-72 duration-1000"
                />
              </div>
    
              <div className="overflow-hidden shadow-2xl rounded-2xl">
                <Image
                  src={gallery2}
                  alt=""
                  className="hover:scale-125 duration-1000"
                />
              </div>
    
              <div className="overflow-hidden shadow-2xl rounded-2xl">
                <Image
                  src={gallery3}
                  alt=""
                  className="hover:scale-125 duration-1000"
                />
              </div>
    
              <div className="overflow-hidden shadow-2xl rounded-2xl">
                <Image
                  src={gallery4}
                  alt=""
                  className="hover:scale-125 h-72 duration-1000"
                />
              </div>
              <div className="overflow-hidden shadow-2xl rounded-2xl">
                <Image
                  src={gallery5}
                  alt=""
                  className="hover:scale-125 h-72 duration-1000"
                />
              </div>
              <div className="overflow-hidden shadow-2xl rounded-2xl">
                <Image
                  src={gallery6}
                  alt=""
                  className="hover:scale-125  duration-1000"
                />
              </div>
            </div>
          </div>
          </>);
    
    
}