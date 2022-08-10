import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl  text-black bg-white sm:text-4xl text-center rounded-xl font-bold shadow hover:bg-slate-200">
        Tech I Use
      </p>
      <div className="flex flex-wrap justify-center pt-2 mt-2">
        <div className="flex flex-col p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#61dbfb" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">React</p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaHtml5 color="#F06529" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">HTML</p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCss3 color="#2965f1" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">CSS</p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            TailwindCSS
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#F0DC7F" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">JavaScript</p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaNodeJs color="#3c873a" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">NodeJs</p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiMysql color="#3c873a" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">My SQL</p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiMongodb color="#3c873a" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
