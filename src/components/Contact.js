import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="max-w-lg w-full text-center m-auto pt-10 pb-10"
      id="Contact"
    >
      <h1 className="text-4xl">Interested in working together?</h1>
      <a
        href="mailto:brijishadoshi12@gmail.com"
        className="text-white hover:text-black"
      >
        <span className="mt-10 inline-block w-auto bg-slate-900 hover:transition-shadow  hover:shadow-2xl hover:bg-transparent font-display  text-base md:text-xl py-4 px-7 rounded-lg cursor-pointer hover:border divide-solid">
          <div className="flex flex-row items-center">
            <span className="mr-3 ">Get in touch</span>
            <FaArrowRight />
          </div>
        </span>
      </a>
      <br></br>
      <a
        href="/Resume Brijisha Doshi.pdf"
        target="_blank"
        className="text-white hover:text-black"
      >
        <span className="mt-10 inline-block w-auto bg-slate-900 hover:transition-shadow  hover:shadow-2xl hover:bg-transparent font-display  text-base md:text-xl py-4 px-7 rounded-lg cursor-pointer hover:border divide-solid">
          <div className="flex flex-row items-center">
            <span className="mr-3 ">Dowload CV</span>
            <FaDownload />
          </div>
        </span>
      </a>
    </div>
  );
}

export default Contact;
