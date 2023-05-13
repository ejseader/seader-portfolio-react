import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineArrowUp } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fuxed w-full z-10" id="top">
      <a href="/" className="logo text-2xl font-bold bouncy">
      <span className="text-accent">E</span>ric <span className="text-accent">J</span> <span id="s" className="text-accent">S</span>eader
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
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
            <a href="./assets/SeaderEric_Resume2023.pdf" download>
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={!toggle ? "mobile-nav right-[-100%]" : "mobile-nav right-0"}>
        <ul className="flex flex-col">
        <li>
            <a href="/#top">Back to Top<AiOutlineArrowUp className={"menu-arrow"} size={22}/></a>
          </li>
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
            <a href="./assets/SeaderEric_Resume2023.pdf" download>Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;