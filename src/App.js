import React from "react";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return <div className="min-h-screen py-10 px-3 sm:px-5 md:px-3 lg:px-1 bg-gray-100">
    <Card/>
    <About/>
    <Skills/>
    <Footer/>
    
  </div>;
}

export default App;
