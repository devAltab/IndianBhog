"use client"
import Image from "next/image";
import card1 from "/public/card/biryani.jpg"
import card2 from "/public/card/Naan.jpg"
import card3 from "/public/card/Naam.jpg"
import card5 from "/public/card/momo.jpg"
export default function menu (){return(<>


 
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
      </>);} 
