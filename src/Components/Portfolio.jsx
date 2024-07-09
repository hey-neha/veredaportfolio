import React from "react";
import project1 from "../assets/ProjecrtImg1.png";
import project2 from "../assets/ProjectImg2.png";
import project3 from "../assets/Project3.png";
import Card from "./Card";

const Portfolio = () => {
  return (
    <div className="w-full h-auto flex flex-col text-center md:p-20">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Our portfolio</h1>
        <p className=" pt-4 md:pt-5  px-10 md:px-64">
          Lorem ipsum dolor{" "}
          <span className="text-center  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  ">
            sit amet consectetur adipisicing elit
          </span>{" "}
          . Officia, eos. Ea explicabo, atque totam ipsa corporis nobis tempore
          in perferendis.
        </p>
      </div>
      {/*     flex box content----------card section */}

      <div
        /* className="  md:flex md:flex-row-2
        justify-items-center */

        className="flex flex-col md:mt-10 gap-12 md:flex-row md:flex-wrap items-center text-center justify-center lg:flex-row-2 "
      >
        {/* card first-------------- */}
        <div className="py-2">
          <div className="rounded overflow-hidden text-start shadow-lg md:max-w-md max-w-sm ">
            <img className="w-full" src={project1} alt="" />

            <div className="px-6 py-2">
              <h1 className="font-bold text-xl ">
                E-tutor-Education & Online LMS
              </h1>
              <p className="font-light ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="py-5 underline-offset-1  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
                View Case Study
              </p>
            </div>
          </div>
        </div>
        {/*    card second */}

        <div className="py-2">
          <div className="rounded text-start overflow-hidden shadow-lg md:max-w-md max-w-sm ">
            <img className="w-full" src={project1} alt="" />

            <div className="px-6 py-2">
              <h1 className="font-bold text-xl ">
                E-tutor-Education & Online LMS
              </h1>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="py-5 underline-offset-1  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
                View Case Study
              </p>
            </div>
          </div>
        </div>

        {/*   card 3 */}

        <div className="py-2">
          <div className="rounded overflow-hidden text-start shadow-lg md:max-w-md max-w-sm ">
            <img className="w-full" src={project1} alt="" />

            <div className="px-6 py-2 ">
              <h1 className="font-bold text-xl ">
                E-tutor-Education & Online LMS
              </h1>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="py-5 underline-offset-1  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
                View Case Study
              </p>
            </div>
          </div>
        </div>

        {/*    card 4 */}

        <div className="py-4">
          <div className="rounded overflow-hidden text-start shadow-lg md:max-w-md max-w-sm ">
            <img className="w-full" src={project1} alt="" />

            <div className="px-6  py-2">
              <h1 className="font-bold text-xl ">
                E-tutor-Education & Online LMS
              </h1>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="py-5 underline-offset-1  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
                View Case Study
              </p>
            </div>
          </div>
        </div>

        {/*    btn */}

        {/*  <div className="  flex  text-center p-3 mx-20 w-full md:w-1/5 bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 rounded mb-10 md:mb-6 ">
          <a className="text-white md:ml-8 ml-40 flex justify-center " href="#">
            {" "}
            View All Portfolio
          </a>
        </div> */}

        <div className=" mt-5 md:mt-14 mb-8  flex text-center p-3  w-full lg:w-1/5  md:w-1/5  bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 rounded ">
          <a className="text-white text-center lg:ml-8 md:ml-8 ml-32" href="#">
            {" "}
            View of all portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
