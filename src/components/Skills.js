import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12 mt-3" id="tech">
      <p className="text-2xl text-black  sm:text-4xl text-center rounded-xl font-bold">
        Tech I Use
      </p>
      <div className="flex flex-wrap justify-center pt-2 mt-2">
        <div className="flex flex-col lg:w-44 lg:p-5 lg:m-6 md:w-44 md:p-5 md:m-6 w-28 p-5 m-3 overflow-hidden bg-white shadow-2xl rounded-xl hover:shadow-2xl hover:shadow-indigo-400">
          <FaReact color="#61dbfb" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">React</p>
        </div>

        <div className="flex flex-col lg:w-44 lg:p-5 lg:m-6 md:w-44 md:p-5 md:m-6 w-28 p-5 m-3 overflow-hidden bg-white shadow-2xl rounded-xl  hover:shadow-2xl hover:shadow-indigo-400">
          <FaHtml5 color="#F06529" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">HTML</p>
        </div>

        <div className="flex flex-col lg:w-44 lg:p-5 lg:m-6 md:w-44 md:p-5 md:m-6 w-28 p-5 m-3 overflow-hidden bg-white shadow-2xl rounded-xl  hover:shadow-2xl hover:shadow-indigo-400">
          <SiCss3 color="#2965f1" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">CSS</p>
        </div>

        <div className="flex flex-col lg:w-44 lg:p-5 lg:m-6 md:w-44 md:p-5 md:m-6 w-28 p-5 m-3 overflow-hidden bg-white shadow-2xl rounded-xl hover:shadow-2xl hover:shadow-indigo-400">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            TailwindCSS
          </p>
        </div>

        <div className="flex flex-col lg:w-44 lg:p-5 lg:m-6 md:w-44 md:p-5 md:m-6 w-28 p-5 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 hover:shadow-2xl hover:shadow-indigo-400">
          <SiJavascript color="#F0DC7F" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">JavaScript</p>
        </div>

        <div className="flex flex-col lg:w-44 lg:p-5 lg:m-6 md:w-44 md:p-5 md:m-6 w-28 p-5 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 hover:shadow-2xl hover:shadow-indigo-400">
          <FaNodeJs color="#3c873a" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">NodeJs</p>
        </div>

        <div className="flex flex-col lg:w-44 lg:p-5 lg:m-6 md:w-44 md:p-5 md:m-6 w-28 p-5 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 hover:shadow-2xl hover:shadow-indigo-400">
          <SiMysql color="#00758f" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">My SQL</p>
        </div>

        <div className="flex flex-col lg:w-44 lg:p-5 lg:m-6 md:w-44 md:p-5 md:m-6 w-28 p-5 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 hover:shadow-2xl hover:shadow-indigo-400">
          <SiMongodb color="#3FA037" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">MongoDB</p>
        </div>

        <div className="flex flex-col lg:w-44 lg:p-5 lg:m-6 md:w-44 md:p-5 md:m-6 w-28 p-5 m-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 hover:shadow-2xl hover:shadow-indigo-400">
          <SiFirebase color="#FFA611" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">Firebase</p>
        </div>
      </div>
      <ScrollIntoView selector="#services">
        <div className="mx-auto p-5">
          <FaChevronDown className="animate-bounce mx-auto text-5xl text-blue-600" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default Skills;
