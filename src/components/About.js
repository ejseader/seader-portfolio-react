import React from "react";
import AboutImg from "../assets/about-img.png";


const About = () => {
  return (
    <section className="bg-secondary px-5 text-white py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between"></div>
      <div className="about-info pb-5 md:pb-0">
        <h2 className="text-4xl font-bold mb-5 divide-y border-b-[5px] w-[180px] border-indigo-600 pb-2">
          About Me
        </h2>

        <p className="pb-5">Customer-facing technical account management and customer success specliaist with proficiencies in SaaS pre/post-sales, implementation, onboarding, support, value-add services, customer success, and web/app development.</p>
        </div>

        <div className="about-img">
        <img src={AboutImg} alt="Memoji of Eric" className="ml-auto" />
      </div>
    </section>
  )
};

export default About;