import React from "react";
import vereda from "../assets/vereda2.png";

const Navbar = () => {
  return (
    <div>
      <nav className=" w-full h-auto flex justify-between px-12 md:mt-2">
        <div>
          <img className=" w-32 md:w-36 mt-1" src={vereda} alt="" />
        </div>
        <div className="hidden md:flex md:justify-center">
          <ul className="flex justify-between gap-10 md:mt-3 font-serif">
            <li>About</li>
            <li>Services</li>
            <li className=" font-bold underline text-sky-400  ">Portfolio</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul>
        </div>
      </nav>
      <hr className="md:mt-2" />
    </div>
  );
};

export default Navbar;
