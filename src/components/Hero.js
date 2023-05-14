import React from "react";
import HeroImg from "../assets/hero-img.png";

import { AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32 hero-wrap-wrap">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between hero-wrap">
      <div className="hero-info pb-5 md:pb-0">
        <h1 className="text-4xl lg:text-6xl">
          Hi, I'm <span className='text-accent'>E</span>ric.<br />
          Full-Stack Web Developer.
        </h1>

        <div className="py-5">
            <a
              href="https://twitter.com/EricSeaderTR" target="_blank" without rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.github.com/ejseader" target="_blank" without rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/ejseader" target="_blank" without rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
          </div>

        <a
            href="/#portfolio"
            className=" btn bg-accent border-2 border-[#05BFDB] text-[#0A4D68] px-6 py-3 portfolio-btn">View Portfolio</a>
      </div>

      <div className="hero-img">
        <img src={HeroImg} alt="Man coding at PC" className="lgw-[80%] ml-auto" />
      </div>
      </div>
    </section>
  )
};

export default Hero;