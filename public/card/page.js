import Image from "next/image";
// import Typewriter from "@typewriter-effect";
import todesktop from "@/public/ujjwal/todesktop-logo.png"
import litti from "@/public/ujjwal/litti.jpg"


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
              Our Website
            </h1>
          </div>
          <div className="flex  text-3xl">
            <p className="mx-3">visit </p>
            <h className="text-purple-600">
              {/* <Typewriter
                options={{
                  strings: ["tasty"],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
            </h>
          </div>
          <p className="text-lg md:text-xl text-gray-600">
            Discover the best services and solutions tailored to your needs
            hello friend hii hyruw jshsg hsghsdv.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2  py-3 flex justify-evenly">
          <Image
            src={todesktop}
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
          food recipes
          </h1>
        </div>
       
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-20px bg-gray-200">
          <div className=" text-center shadow-2xl rounded">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={homeimg}
                alt=""
                className="hover:scale-125 duration-1000"
              />
            </div>
            <h3 className="py-2 text-2xl text-black">
            Litti Chokha
            </h3>
            <p className="py-2 text-black">
            A traditional Bihari recipe, Litti Chokha is a delicious recipe that can be included in your lunch or dinner menu.
            </p>
            <button className="justify-center bg-purple-800 rounded-xl px-4 m-2 mx-2 text-white h-9">
              Start Watching
            </button>
          </div>

          <div className="text-center shadow-lg rounded">
            <div className=" rounded-2xl overflow-hidden">
              <Image
                src={homeimg}
                alt=""
                className="hover:scale-125 duration-1000"
              />
            </div>
            <h3 className="py-2 text-2xl text-black">
            Idli Sambar 
            </h3>
            <p className="py-2 text-black">
            Idli Sambar is a famous divinely south indian breakfast combination. Idli Sambar is comforting and healthy making it the best and popular breakfast in India
            </p>
            <button className="justify-center bg-purple-800 rounded-xl px-4 m-2 mx-2 text-white h-9">
              Start Watching
            </button>
          </div>
          <div className="text-center shadow-lg rounded">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={homeimg}
                alt=""
                className="hover:scale-125 duration-1000"
              />
            </div>
            <h3 className="py-2 text-2xl text-black">
              Python Tutorials - 100 Days of Code
            </h3>
            <p className="py-2 text-black">
              Python is one of the most demanded programming languages in the
              job market. Surprisingly, it is equally easy to learn and master
              Python. Let s commit our 100 days of code to python!
            </p>
            <button className="justify-center bg-purple-800 rounded-xl px-4 m-2 mx-2 text-white h-9">
              Start Watching
            </button>
          </div>
          <div className="text-center shadow-lg rounded">
            <div className=" rounded-2xl overflow-hidden">
              <Image
                src={homeimg}
                className="hover:scale-125 duration-1000"
                alt=""
              />
            </div>
            <h3 className="py-2 text-2xl text-black">
              Python Tutorials - 100 Days of Code
            </h3>
            <p className="py-2 text-black">
              Python is one of the most demanded programming languages in the
              job market. Surprisingly, it is equally easy to learn and master
              Python. Let s commit our 100 days of code to python!
            </p>
            <button className="justify-center bg-purple-800 rounded-xl px-4 m-2 mx-2 text-white h-9">
              Start Watching
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
              icon={faLaptopCode}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faLaptopCode}
              // 
              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faLaptopCode}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faLaptopCode}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faLaptopCode}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faLaptopCode}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faLaptopCode}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>

          <div className="group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-1000">
            <FontAwesomeIcon
              icon={faLaptopCode}

              className="text-blue-500 size-10 m-auto group-hover:text-white duration-1000 animate-bounce"
            />
            <h3 className="text-xl py-2">Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
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
              src={homeimg}
              alt=""
              className="hover:scale-125 duration-1000"
            />
          </div>

          <div className="overflow-hidden shadow-2xl rounded-2xl">
            <Image
              src={homeimg}
              alt=""
              className="hover:scale-125 duration-1000"
            />
          </div>

          <div className="overflow-hidden shadow-2xl rounded-2xl">
            <Image
              src={homeimg}
              alt=""
              className="hover:scale-125 duration-1000"
            />
          </div>

          <div className="overflow-hidden shadow-2xl rounded-2xl">
            <Image
              src={homeimg}
              alt=""
              className="hover:scale-125 duration-1000"
            />
          </div>
          <div className="overflow-hidden shadow-2xl rounded-2xl">
            <Image
              src={homeimg}
              alt=""
              className="hover:scale-125 duration-1000"
            />
          </div>
          <div className="overflow-hidden shadow-2xl rounded-2xl">
            <Image
              src={homeimg}
              alt=""
              className="hover:scale-125 duration-1000"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className=" bg-gray-100 max-w-[1320px] mx-auto">
          <h1 className="text-4xl text-center py-5 text-black">Contact Us</h1>
        </div>

        {/* <div>
            <Typewriter
            options={{
              strings: ["ujjwal", "satyam", "altab", "raj"],
              autoStart: true,
              loop: true,
            }}
          />  
        </div>
       */}
       </div>
</>
  );
}
