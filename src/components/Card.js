import React from "react";
import profile from "../images/profile.jpg";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Card = () => {
  return (
    <div className="w-full" id="top">
      <div className="flex flex-col justify-center max-w-sm mx-auto bg-white shadow-2xl rounded-xl p-5 hover:bg-gray-100">
        <div>
          <img
            className="w-48 m-auto shadow-lg rounded-xl drop-shadow-lg"
            src={profile}
            alt="Profile"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl md:text-2xl text-gray-900">
            Brijisha Doshi
          </p>
          <p className="text-xs sm:text-base md:text-base text-gray-600 pt-2 pb-4 px-1.5 w-auto inline-block border-b-2">
            Web Developer
          </p>

          <div className="flex align-center justify-center mt-4">
            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-grey-900 hover:bg-gray-600 rounded-full hover:text-white transition-colors duration-400"
              href="https://github.com/Brijisha"
            >
              <IoLogoGithub />
              <span className="sr-only">Github</span>
            </a>

            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-blue-900 hover:bg-blue-700 rounded-full hover:text-white transition-colors duration-400"
              href="https://www.linkedin.com/in/brijishadoshi12"
            >
              <IoLogoLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-teal-900 rounded-full hover:text-white transition-colors duration-400"
              href="mailto:brijishadoshi12@gmail.com"
            >
              <MdEmail />
              <span className="sr-only">Mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
