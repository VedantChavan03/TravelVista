import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full py-15 bg-gray-400 text-center">
          <h1 className="pt-3">TravelWithMe</h1>
      <div className="max-w-[1240px] mx-auto flex px-4 justify-between">
        <div className="my-4">
            <h1>Our Socials</h1>
          <div className="flex">
            <FaFacebook className="icon my-1 mr-2 cursor-pointer" /> 
            <h4 className="my-1 cursor-pointer underline">@TravelWithMe</h4>
          </div>
          <div className="flex">
            <FaInstagram className="icon my-1 mr-2 cursor-pointer" /> 
            <h4 className="my-1 cursor-pointer underline">@TravelWithMe</h4>
          </div>
          <div className="flex">
            <FaTwitter className="icon my-1 mr-2 cursor-pointer" /> 
            <h4 className="my-1 cursor-pointer underline">@TravelWithMe</h4>
          </div>
          <div className="flex">
            <FaYoutube className="icon my-1 mr-2 cursor-pointer" /> 
            <h4 className="my-1 cursor-pointer underline">@TravelWithMe</h4>
          </div>
        </div >
        <div>
        <h1 className="my-4">Contact Us</h1>
        <div className="flex">
        <BiPhoneCall size={20} className="icon my-1 mr-2 cursor-pointer"/>
        <h4 className="cursor-pointer underline text-xl">XXXXX-XXXXX</h4>
        </div>
        <div className="flex">
        <BiEnvelope size={20} className="icon my-2 mr-2 cursor-pointer"/>
        <h4 className=" my-1 cursor-pointer underline ">travelwithme@gmail.com</h4>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
