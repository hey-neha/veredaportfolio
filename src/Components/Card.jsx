import React from "react";
import project1 from "../assets/ProjecrtImg1.png";
import project2 from "../assets/ProjectImg2.png";
import project3 from "../assets/Project3.png";

const Card = () => {
  return (
    <div
      /* className="  md:flex md:flex-row-2
        justify-items-center */

      className="flex flex-col md:mb-20 md:flex-row md:flex-wrap items-center text-center justify-center lg:flex-row-2 gap-10 "
    >
      {/* card first-------------- */}
      <div className="py-4">
        <div className="rounded overflow-hidden shadow-lg md:max-w-md max-w-sm ">
          <img className="w-full" src={project1} alt="" />

          <div className="px-6 py-4">
            <h1 className="font-bold text-xl ">
              E-tutor-Education & Online LMS
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>View Case Study</p>
          </div>
        </div>
      </div>
      {/*    card second */}

      <div className="py-4">
        <div className="rounded overflow-hidden shadow-lg md:max-w-md max-w-sm ">
          <img className="w-full" src={project1} alt="" />

          <div className="px-6 py-4">
            <h1 className="font-bold text-xl ">
              E-tutor-Education & Online LMS
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>View Case Study</p>
          </div>
        </div>
      </div>

      {/*   card 3 */}

      <div className="py-4">
        <div className="rounded overflow-hidden shadow-lg md:max-w-md max-w-sm ">
          <img className="w-full" src={project1} alt="" />

          <div className="px-6 py-4">
            <h1 className="font-bold text-xl ">
              E-tutor-Education & Online LMS
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>View Case Study</p>
          </div>
        </div>
      </div>

      {/*    card 4 */}

      <div className="py-4">
        <div className="rounded overflow-hidden shadow-lg md:max-w-md max-w-sm ">
          <img className="w-full" src={project1} alt="" />

          <div className="px-6 py-4">
            <h1 className="font-bold text-xl ">
              E-tutor-Education & Online LMS
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>View Case Study</p>
          </div>
        </div>
      </div>

      {/*    btn */}

      <div className="  md:mt-14 flex  text-center p-3  w-full md:w-1/5 bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 rounded ">
        <a className="text-white text-center flex justify-center " href="#">
          {" "}
          View All Portfolio
        </a>
      </div>
    </div>
  );
};

export default Card;
