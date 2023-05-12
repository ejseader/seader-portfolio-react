import React from "react";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
import Project4 from "../assets/project4.jpg";
import Project5 from "../assets/project5.jpg";
import Project6 from "../assets/project6.jpg";


const Portfolio = () => {
  return (
    <section className="bg-primary px-5 text-white py-32" id="portfolio">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between"></div>
      <div className="mb-6 pb-5 md:pb-0">
        <h2 className="text-4xl font-bold mb-6 divide-y border-b-[5px] w-[180px] border-indigo-600 pb-2">
          Portfolio
        </h2>
      </div>


      <div className="container mx-auto grid md:grid-cols-3 port-img mt-5">
        <div>
          <a href="/#project1"><img src={Project1} alt="Calculator App" className="ml-auto" /></a>
        </div>
        <div>
          <a href="/#project2"><img src={Project2} alt="LED Wall App" className="ml-auto" /></a>
        </div>
        <div>
          <a href="/#project3"><img src={Project3} alt="Puzzle App" className="ml-auto" /></a>
        </div>
        <div>
          <a href="/#project4"><img src={Project4} alt="Run Buddy App" className="ml-auto" /></a>
        </div>
        <div>
          <a href="/#project5"><img src={Project5} alt="Surf Report App" className="ml-auto" /></a>
        </div>
        <div>
          <a href="/#project6"><img src={Project6} alt="Text Editor App" className="ml-auto" /></a>
        </div>
      </div>
    </section>
  )
};

export default Portfolio;