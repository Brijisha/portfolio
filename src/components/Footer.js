import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

function Footer() {
  return (
    <div className="py-5 border-t-4 mt-2">
      <div className="flex justify-center mt-4">
        <a
          className="text-5xl m-1 p-1 sm:m-2 sm:p-2 text-grey-900 hover:bg-gray-600 rounded-full hover:text-white transition-colors duration-400"
          href="https://github.com/Brijisha"
        >
          <IoLogoGithub />
          <span className="sr-only">Github</span>
        </a>

        <a
          className="text-5xl m-1 p-1 sm:m-2 sm:p-2 text-blue-900 hover:bg-blue-700 rounded-full hover:text-white transition-colors duration-400"
          href="https://www.linkedin.com/in/brijishadoshi12"
        >
          <IoLogoLinkedin />
          <span className="sr-only">LinkedIn</span>
        </a>

        <a
          className="text-5xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-teal-900 rounded-full hover:text-white transition-colors duration-400"
          href="mailto:brijishadoshi12@gmail.com"
        >
          <MdEmail />
          <span className="sr-only">Mail</span>
        </a>
      </div>
      <div className="flex flex-wrap justify-center mt-4 text-2xl sm:text-base">
        <p className="text-black mb4">
          Made with
          <span className="mr-2 " role="link" aria-label="heart">
            💙
          </span>
          <a
            className="text-blue-600 hover:underline transition-colors"
            href="mailto:brijishadoshi12@gmail.com"
          >
            Brijisha Doshi
          </a>
        </p>
      </div>
      <ScrollIntoView selector="#top">
        <div className="float-right p-5">
          <FaChevronUp className="animate-bounce mx-auto text-5xl text-blue-600" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default Footer;
