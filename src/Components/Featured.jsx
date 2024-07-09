import React from "react";
import bhaskar from "../assets/bhaskar.png";
import hindustan from "../assets/hindustan.png";
import news from "../assets/new18.png";
import dailynews from "../assets/dailyhunt.png";

const Featured = () => {
  return (
    <div className="w-full text-center h-auto bg-gray-100 flex flex-col">
      <h1 className=" md:mt-20 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] font-bold">
        Featured In
      </h1>
      <div className=" md:my-14 my-5 gap-5  md:flex md:justify-between mx-44">
        <img className="w-28 h-auto md:mb-3" src={bhaskar} alt="" />
        <img className="w-32 h-11" src={hindustan} alt="" />
        <img className="w-28 h-11 " src={news} alt="" />
        <img className="w-28 h-11 " src={dailynews} alt="" />
      </div>
    </div>
  );
};

export default Featured;
