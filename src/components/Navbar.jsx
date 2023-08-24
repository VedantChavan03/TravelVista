import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const [logo, setlogo] = useState(false);
  const handleDrop = () => {
    setDrop(!drop);
    setlogo(!logo);
  };
  return (
    <div className="flex w-full justify-between items-center h-20 p-4 absolute z-10 text-white ">
      {/* LOGO */}
      <div>
        <h1 className={logo ? "hidden" : "block"}>TravelWithMe</h1>
      </div>

      {/* Navigators */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Highlights</li>
        <li>More</li>
      </ul>

      {/* Icon Menu */}
      <div className="hidden md:flex">
        <BsPerson className="mr-4" size={20} />
        <BiSearch size={20} />
      </div>

      {/* Dropdown menu */}
      <div onClick={handleDrop} className="md:hidden z-10">
        {drop ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenu size={20} />
        )}
      </div>

      <div
        onClick={handleDrop}
        className={
          drop
            ? "absolute text-black left-0 top-0 w-full bg-gray-300/90 px-5 py-7 flex flex-col"
            : "absolute text-black left-[-100%] top-0 w-full bg-gray-300/90 px-5 py-7 flex flex-col"
        }
      >
        <ul>
          <h1>TravelWithMe</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Highlights</li>
          <li className="border-b">More</li>
          <div className="flex flex-col py-2">
            <button className="my-2">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaTwitter className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
