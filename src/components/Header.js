import React, { useState } from "react";
import {AiOutlineTwitter} from "react-icons/ai";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed w-full h-[80px] flex justify-between items=center px-4 bg-primary text-white" id="top">
      <a href="/" className="text-2xl font-bold">
      <span className="text-accent">E</span>ric <span className="text-accent">J</span> <span id="s" className="text-accent">S</span>eader
      </a>

      {/* Desktop Nav */}
        <ul className="hidden md:flex py-8 pr-6">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/#publications">Publications</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="./assets/SeaderResume2023.pdf" target="_blank" without rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-20 mt-4'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Nav */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#09455d] text-white flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <a href="/#about">About</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href="/#publications">Publications</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href="/#contact">Contact</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href="./assets/SeaderResume2023.pdf" target="_blank" without rel="noreferrer">Resume</a>
          </li>
        </ul>

      {/* Socials */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 socials'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-white' href="https://linkedin.com/in/ejseader" target="_blank" without rel="noreferrer">LinkedIn <FaLinkedin size={30} /></a>
            </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-white' href="https://github.com/ejseader" target="_blank" without rel="noreferrer">GitHub <FaGithub size={30} /></a>
          </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#26a7de]'>
        <a className='flex justify-between items-center w-full text-white' href="https://twitter.com/ericseadertr" target="_blank" without rel="noreferrer">Twitter <AiOutlineTwitter size={30} /></a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#05BFDB]'>
        <a className='flex justify-between items-center w-full text-white' href="mailto:eric@ericseader.com">Email <HiOutlineMail size={30} /></a>
        </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;