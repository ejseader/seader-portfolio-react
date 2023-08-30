import React from "react";
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer">
      &copy; 2023 Eric Seader - All rights reserved.
      </div>

      <nav className="block py-2">
        <ul className="flex">
          <li>
          <a
              href="https://www.github.com/ejseader" target="_blank" without rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={30} />{" "}
            </a>
          </li>
          <li>
          <a
              href="https://www.linkedin.com/in/ejseader" target="_blank" without rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={30} />{" "}
            </a>
          </li>
        </ul>
      </nav>
      </footer>
  )
}

export default Footer;