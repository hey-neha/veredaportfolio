// import React from "react";

// const Contactus = () => {
//   return (
//     <div className="w-full md:h-screen h-auto text-center md:mb-10 ">
//       {/*      all text ---------------------------------*/}
//       <div className="mt-20">
//         <p className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
//           Contact us
//         </p>
//         <h1 className=" text-3xl  font-bold">Get in touch</h1>
//         <p className="md:mt-4">
//           We'd love to hear from you, please fill out this form.
//         </p>
//       </div>
//       {/*     form ---------------------------*/}
//       <div className="md:mt-20 mx-10 md:mx-20">
//         <form action="#">
//           {/*  first name and  last name */}
//           <div className="text-center flex flex-col gap-6 justify-center md:flex md:flex-row">
//             {/*     name */}
//             <div className="">
//               <label className="md:mr-60 " htmlFor="#">
//                 First Name
//               </label>
//               <br className="" />
//               <input
//                 className=" w-full  md:w-[330px] p-2 border rounded "
//                 type="text"
//                 placeholder="First name"
//               />
//             </div>

//             {/*   last name */}
//             <div>
//               <label className="text-start md:mr-60 " htmlFor="#">
//                 {" "}
//                 Last Name
//               </label>
//               <br />
//               <input
//                 className="w-full   md:w-[330px] p-2 border rounded  "
//                 type="text"
//                 placeholder="Last Name"
//               />
//             </div>
//           </div>

//           {/*    email -------------------------*/}

//           <div>
//             <label className="text-start md:mr-[640px]" htmlFor="#">
//               Email
//             </label>
//             <br />
//             <input
//               className="w-full md:w-[700px] p-2 border rounded"
//               type="text"
//               placeholder="You@Company.com"
//             />
//           </div>

//           {/* phone number ----------------------*/}
//           <div>
//             <label className="text-start  md:mr-[560px] " htmlFor="#">
//               Phone Number
//             </label>
//             <br />
//             <input
//               className="w-full  md:w-[700px] p-2 border rounded  "
//               type="text"
//               placeholder="+1 (555) 000-000"
//             />
//           </div>
//           {/*  text area */}
//           <div>
//             <label className=" text-start  md:mr-[600px]" htmlFor="#">
//               Message
//             </label>
//             <br />
//             <textarea
//               className="w-full md:w-[700px]  p-2 border rounded "
//               name=""
//               id=""
//             ></textarea>
//           </div>

//           {/*   button */}
//           <div className=" md:mt-5 p-2 md:mr-[640px] border md:ml-48 rounded w-full md:w-[700px]  bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
//             <button className=" "> Send message</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contactus;

import React from "react";

const Contactus = () => {
  return (
    <div className="w-full h-auto text-center py-10 md:py-20">
      {/* Header Section */}
      <div className="mt-10 md:mt-0">
        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  ">
          Contact us
        </p>
        <h1 className="text-3xl font-bold mt-2 md:mt-4">Get in touch</h1>
        <p className="mt-2 md:mt-4 text-gray-400">
          We'd love to hear from you, please fill out this form.
        </p>
      </div>

      {/* Form Section */}
      <div className="mt-10 md:mt-20 mx-4 md:mx-20">
        <form action="#">
          {/* First Name and Last Name */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="w-full md:w-1/4">
              <label className="block text-start " htmlFor="first-name">
                First Name
              </label>
              <input
                className="w-full p-2 border rounded mt-2"
                type="text"
                id="first-name"
                placeholder="First name"
              />
            </div>

            <div className="w-full md:w-1/4">
              <label className="block text-start" htmlFor="last-name">
                Last Name
              </label>
              <input
                className="w-full p-2 border rounded mt-2"
                type="text"
                id="last-name"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-6">
            <label className="block mr-[380px]  md:mr-[500px]" htmlFor="email">
              Email
            </label>
            <input
              className="w-full md:w-3/4 lg:w-1/2 p-2 border rounded mt-2"
              type="email"
              id="email"
              placeholder="You@Company.com"
            />
          </div>

          {/* Phone Number */}
          <div className="mt-6">
            <label
              className="block mr-[380px]  md:mr-[430px]"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <input
              className="w-full md:w-3/4 lg:w-1/2 p-2 border rounded mt-2"
              type="tel"
              id="phone-number"
              placeholder="+1 (555) 000-000"
            />
          </div>

          {/* Message */}
          <div className="mt-6">
            <label
              className="block mr-[380px] md:mr-[480px] "
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full md:w-3/4 lg:w-1/2 p-2 border rounded mt-2"
              id="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full md:w-3/4 lg:w-1/2 p-2 border rounded bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-white font-bold"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
