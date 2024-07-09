import React from "react";
import bhaskar from "../assets/bhaskar.png";
import hindustan from "../assets/hindustan.png";
import news from "../assets/new18.png";
import dailynews from "../assets/dailyhunt.png";

// const Featured = () => {
//   return (
//     <div className="w-full text-center h-auto bg-gray-100 flex flex-col">
//       <h1 className=" md:mt-20   md:text-[30px] text-[24px] lg:text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
//         Featured In
//       </h1>
//       <div className=" md:my-14 my-5  gap-10  md:flex md:justify-between mx-44">
//         <img className="md:w-28 w-16 h-11 md:mb-3" src={bhaskar} alt="" />
//         <img className="md:w-32 w-16 h-11" src={hindustan} alt="" />
//         <img className="md:w-28 w-10 h-11 " src={news} alt="" />
//         <img className="md:w-28 w-10 h-11 " src={dailynews} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Featured;

const Featured = () => {
  return (
    <div className="w-full text-center h-auto bg-gray-100 flex flex-col py-10 md:py-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
        Featured In
      </h1>
      <div className="mt-5 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 mx-10 md:mx-20 lg:mx-44">
        <img className="w-20 md:w-28 mx-auto" src={bhaskar} alt="Bhaskar" />
        <img className="w-24 md:w-32 mx-auto" src={hindustan} alt="Hindustan" />
        <img className="w-16 md:w-28 mx-auto" src={news} alt="News18" />
        <img
          className="w-16 md:w-28 mx-auto"
          src={dailynews}
          alt="Daily News"
        />
      </div>
    </div>
  );
};

export default Featured;
