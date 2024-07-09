import React from "react";
import Bright from "../assets/bright visin.png";
import wconcil from "../assets/wconcil.png";
import myTvs from "../assets/my tvs.png";
import Beuty from "../assets/beutySupply.png";

const Clients = () => {
  return (
    <>
      {/* <div className="w-full  bg-gray-100  ">
      <h1 className="  md:mt-20 text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] font-bold">
        Our Clients
      </h1>

      <div className="flex justify-between md:mx-56 flex-col md:my-14 md:flex-row"> */}
      {/*   <img src={Bright} alt="" />
        <img src={wconcil} alt="" />
        <img src={myTvs} alt="" />
        <img src={Beuty} alt="" />}

        <img className="w-16 h-16" src={Bright} alt="" />
        <img className="w-16 h-16" src={wconcil} alt="" />

        <img className="w-16 h-16" src={myTvs} alt="" />

        <img className="w-10 h-10 mt-2" src={Beuty} alt="" />
      </div>
    </div> 
 */}

      <div className="  text-center h-auto bg-gray-100 flex flex-col py-10 md:py-20 justify-center ">
        <h1 className="  text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
          Our Clients
        </h1>
        <div className=" text-center md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14  mx-10 md:mx-20 lg:mx-44">
          {/* ml-40 mb-5 md:mt-16  mx-20 md:mx-48 */}
          <img className="w-20 h-16 mx-auto" src={Bright} alt="" />
          <img className="w-20 h-16 mx-auto" src={wconcil} alt="" />

          <img className="w-20 h-16 mx-auto" src={myTvs} alt="" />

          <img
            className=" w-20 h-16 md:w-10 md:h-10 mt-2 mx-auto"
            src={Beuty}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Clients;
