import React from "react";

function Services() {
  return (
    <div className="w-full mx-auto justify-center py-5" id="services">
      <p className="text-2xl text-black  sm:text-4xl text-center rounded-xl font-bold">
        Services I provide
      </p>
      <div className="flex flex-wrap justify-center pt-7 mt-4 p-5 ">
        <div className=" p-5 m-4 overflow-hidden font-bold bg-white shadow-2xl rounded-lg sm:w-60">
          <h5 className="mx-auto text-xl sm:text-2xl inline-block border-b-2">
            <span className="text-blue-900"> Front end </span> developement
          </h5>
          <p className="mt-6 text-xl font-semibold text-left">
            I develop websites using Html, CSS, JavaScript and CSS frameworks
            like Bootstrap, Tailwind CSS. I develop websites in React from
            provided UI Design in Figma , Adobe XD or others.
          </p>
        </div>

        <div className=" p-5 m-4 overflow-hidden font-bold bg-white shadow-2xl rounded-lg sm:w-60">
          <h5 className="mx-auto text-xl sm:text-2xl inline-block border-b-2">
            <span className="text-blue-900"> Back end </span> developement
          </h5>
          <p className="mt-6 text-xl font-semibold text-left">
            I develop REST APIs in Node JS using Express server with databases
            like MySQL and MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
