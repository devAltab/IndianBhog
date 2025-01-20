"use client"
import Head from "next/head";
import Image from "next/image";
import homeimg from "/public/logo/pngwing.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import card1 from "/public/card/biryani.jpg"
import card2 from "/public/card/Naan.jpg"
import card3 from "/public/card/Naan.jpg"
import card5 from "/public/card/momo.jpg"
import gallery1 from "/public/gallery/gallery1.jpg"
import gallery2 from "/public/gallery/gallery2.jpg"
import gallery3 from "/public/gallery/gallery3.jpg"
import gallery4 from "/public/gallery/gallery4.jpg"
import gallery5 from "/public/gallery/gallery5.jpg"
import gallery6 from "/public/gallery/gallery6.jpg"

// import card5 from "/public/card/card1.jpg"
// import card6 from "/public/card/card1.jpg"
// import card7 from "/public/card/card1.jpg"
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import codeImage from "/public/logo/pngwing.png";

export default function Home() {
  return (
    <>
      <div className="flex   flex-col-reverse  md:flex-row items-center justify-center  min-h-[80vh] bg-gray-200">
        <div className="md:w-[40%]   mx-4 text-center md:text-left space-y-6">
          <div className="flex">
            <h1 className=" mr-5 md:text-5xl text-2xl font-bold ">
              Welcome to
            </h1>
            <h1 className="text-purple-600 md:text-5xl text-2xl font-bold ">
              Indian Bhog
            </h1>
          </div>
          <div className="flex  text-3xl">
            <p className="mx-3">Menu </p>
            <h2 className="text-purple-600">
              <Typewriter
                options={{
                  strings: ["Pizza", "Butter Chicken", "Kadai Paneer", "Dal Makhani", "Butter Naan"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600">
            We’ve worked hard on this new menu and we’re excited to finally be able to share it with you. Book a table now to try it!
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
            Buy Now
          </button>
        </div>
        <div className="md:w-1/2  py-3 flex justify-evenly">
          <Image
            src={codeImage}
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="m-10 bg-gray-200">
        <div className=" mb-10 bg-gray-200 max-w-[1320px] mx-auto">
          <h1 className="text-4xl text-center py-5 text-black">
            Menu Card
          </h1>
        </div>

        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-20px bg-gray-200">
          <div className=" text-center shadow-2xl rounded">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={card1}
                alt=""
                className="hover:scale-125 h-44 duration-1000"
              />
            </div>
            <h3 className="py-2 text-2xl text-black">
              Chicken Biryani
            </h3>
            <p className="py-2 m-4 text-black">
              Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice.
            </p>
            <button className="justify-center bg-purple-800 rounded-xl px-4 m-2 mx-2 text-white h-9">
              Add Cart
            </button>
          </div>

          <div className="text-center shadow-2xl rounded">
            <div className=" rounded-2xl overflow-hidden">
              <Image
                src={card2}
                alt=""
                className="hover:scale-125 duration-1000"
              />
            </div>
            <h3 className="py-2  text-2xl text-black">
              Butter Naan
            </h3>
            <p className="py-2 m-4  text-black">
              A single-layer bread with a light and slightly fluffy texture and golden-brown spots from the baking process.
            </p>
            <button className="justify-center bg-purple-800 rounded-xl px-4 m-2 mx-2 text-white h-9">
              Add Cart
            </button>
          </div>
          <div className="text-center shadow-2xl rounded">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={card3}
                alt=""
                className="hover:scale-125 duration-1000"
              />
            </div>
            <h3 className="py-2 text-2xl text-black">
              Gulab Jammun
            </h3>
            <p className="py-2 m-4 text-black">
              Gulab jamun is an Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup.
            </p>
            <button className="justify-center bg-purple-800 rounded-xl px-4 m-2 mx-2 text-white h-9">
              Add Cart
            </button>
          </div>
          <div className="text-center shadow-2xl rounded">
            <div className=" rounded-2xl overflow-hidden">
              <Image
                src={card5}
                className="hover:scale-125 h-44 duration-1000"
                alt=""
              />
            </div>
            <h3 className="py-2 text-2xl text-black">
              Butter Naan
            </h3>
            <p className="py-2 m-4 text-black">
              Momos are steamed or fried dumplings that are a staple food in Nepal and a popular dish in other Himalayan countries.
            </p>
            <button className="justify-center bg-purple-800 rounded-xl px-4 m-2 mx-2 text-white h-9">
              Add Cart
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className=" bg-gray-100 max-w-[1320px] mx-auto">
          <h1 className="text-4xl text-center py-5 text-black">Our Services</h1>
        </div>

        <div className="max-w-[1200px] mx-auto py-[30px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faWrench}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Home Delivery</h3>
            <p>
            We are not put on this earth for ourselves, but are placed here for each other. If you are there always for others, then in time of need, someone will be there for you.
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faWrench}
              // 
              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">On Restaurant</h3>
            <p>
            We are not put on this earth for ourselves, but are placed here for each other. If you are there always for others, then in time of need, someone will be there for you.
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faWrench}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Fast service</h3>
            <p>
            We are not put on this earth for ourselves, but are placed here for each other. If you are there always for others, then in time of need, someone will be there for you.
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faWrench}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Wedding Menu</h3>
            <p>
            We are not put on this earth for ourselves, but are placed here for each other. If you are there always for others, then in time of need, someone will be there for you.
            </p>
          </div>

         

          

         


        </div>
      </div>

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




     




      <div className=" mb-10 bg-gray-200 max-w-[1320px] mx-auto">
        <h1 className="text-4xl text-center py-5 text-black">
          Recipes
        </h1>
      </div>

      <div className=" flex justify-evenly my-14 ">

        <iframe className="rounded-3xl shadow-2xl" width="560" height="315" src="https://www.youtube.com/embed/a30BLUQiFoc?si=tihDv8UUgni8RBon" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className="flex-row my-auto   ">
          <h1 className="text-4xl my-4">
            Butter Masala
          </h1>
          <p className="text-xl ">
            होटल जैसा पनीर बटर मसाला | Restaurant style Paneer Butter Masala.

          </p>
        </div>
      </div>

      <div className=" flex justify-evenly my-14 ">


        <div className="flex-row my-auto   ">
          <h1 className="text-4xl my-4">
            Veg Mayo Sandwich
          </h1>
          <p className="text-xl ">
            बाजार जैसा वेज क्लब सैंडविच 5 मिनट में | Veg Club Sandwich | Veg Mayo Sandwich.

          </p>
        </div>
        <iframe className="rounded-3xl shadow-2xl" width="560" height="315" src="https://www.youtube.com/embed/BlzJzavriHw?si=wcp3KwmA-MNEFQ3m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>


     
    </>
  );
}
