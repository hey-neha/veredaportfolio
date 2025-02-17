import React from "react";

const Home = () => {
  return (
    <div className="w-full h-auto p-10  md:p-24  text-center  ">
      <div>
        <h1 className="  text-center md:text-[30px] text-black text-[24px] lg:text-[36px] font-semibold ">
          Portfolio of{" "}
          <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  font-semibold">
            Vereda Digital Technology
          </span>{" "}
        </h1>
      </div>
      <div>
        <p
          className=" mt-4 md:mt-6 text-[16px] lg:text-[20px] text-base    text-[#42526B]   sm:text-lg md:text-2xl mx-auto font-normal leading-[25px] opacity-70
        "
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nobis
          possimus eum beatae exercitationem error doloribus enim quae quis illo
          laudantium assumenda a libero natus placeat magnam ad molestiae
          nesciunt architecto autem repellendus facilis, minima expedita!
          Repellat molestiae voluptas, maiores quis porro doloribus animi
          sapiente, repellendus est deserunt ex illum minima. Ducimus, earum
          architecto quaerat nesciunt unde vero amet laudantium molestias minima
          magni, aliquam perspiciatis iure esse doloribus optio, quam corporis
          rerum voluptatem facilis neque provident enim id doloremque. Obcaecati
          suscipit.
        </p>
        <div className=" mt-5 md:mt-14  flex md:ml-[300px] lg:ml-[390px] lg:w-[23%]  text-center p-3  w-full md:w-1/5 bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 rounded ">
          <a className="text-white ml-14 flex justify-center md:ml-4" href="#">
            {" "}
            Talk to our Export Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
