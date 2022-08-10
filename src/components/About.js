import React from "react";
import ScrollIntoView from "react-scroll-into-view";
//import { HiChevronDown } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
function About() {
  return (
    <div div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl lg:text-6xl font-bold text-center">
        Hey 👋
      </p>

      <p className="text-base text-gray-600 md:text-xl lg:text-2xl text-center mt-4">
        I'm a passionate Web and React Developer. I love creating websites. I
        also love to do frelancing projects.I am very fond of learning new
        things. I dvelope responsive website using React.js and Tailwind CSS.
        I'm also learning Back-End Development and looking forward to be a Full
        Stack Web Developer. I have created REST API in Node.js uning Express
        server. I have done my Bachelor of Engineering in Computer Science.
      </p>

      <ScrollIntoView selector="tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-5xl text-blue-600" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
