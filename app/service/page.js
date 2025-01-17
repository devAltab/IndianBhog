"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
export default function service(){
    return (<>
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

    </>);
}