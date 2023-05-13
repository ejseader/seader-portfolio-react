import React from "react";
import AboutImg from "../assets/about-img.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <section className="bg-secondary px-5 text-white py-32" id="about">
      <div className="section-wrap">
      <div className="section">
        <h2 className="text-4xl font-bold mb-6 divide-y border-b-[5px] w-[260px] border-[#00FFCA] pb-2">
          About Me <a href="/#top" className="rts-btn"><BsFillArrowUpCircleFill size={25} /></a>
        </h2>

        <p className="pb-5">I am a customer-facing technical account management and customer success specliaist with proficiencies in SaaS pre/post-sales, implementation, onboarding, support, value-add services, customer success, and web/app development.</p>
        </div>

        <div className="about-img">
        <img src={AboutImg} alt="Memoji of Eric" className="lgw-[80%] ml-auto" />
      </div>
      </div>
    </section>
  )
};

export default About;