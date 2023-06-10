import React from "react";
import AboutImg from "../assets/about-img.png";


const About = () => {
  return (
    <section className="bg-secondary px-5 text-white py-32" id="about">
      <div className="section-wrap">
      <div className="section">
        <h2 className="text-4xl font-bold mb-6 divide-y border-b-[5px] w-[260px] border-[#00FFCA] pb-2">
          About Me
        </h2>

        <p className="pb-5">Eric is a front end web developer leveraging a background in SaaS pre/post-sales support and implementation to bring unique insight into how end-users interact with websites and platforms. He recently earned a certificate in Full Stack Web Development from the Rutgers University Coding Boot Camp. Eric is a UI design enthusiast and a creative troubleshooter and problem-solver with a passion for taking projects from concept to production.</p>
        </div>

        <div className="about-img">
        <img src={AboutImg} alt="Memoji of Eric" className="lgw-[80%] ml-auto" />
      </div>
      </div>
    </section>
  )
};

export default About;