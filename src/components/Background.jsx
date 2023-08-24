import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import bg1 from "../assets/bg1.mp4";

const Background = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={bg1}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/40"></div>
      <div className="absolute w-full h-full top-0 left-0 text-white flex flex-col justify-center text-center p-1">
        <h1>Know Your Destinations</h1>
        <h4 className="py-2">
          Search the destinations you wish to visit and see what people have to
          say about them!
        </h4>
        <form className="mt-4 flex justify-between items-center max-w-[800px] mx-auto w-full border p-1 px-2 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              className="bg-transparent w-[600px] sm:[700px] outline-none font-[Montserrat]"
              type="text"
              name="Search"
              id="Search"
              placeholder="Search Destination"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                className="icon"
                size={20}
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Background;
