import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <Image className="mx-2" width={40} src={logo} alt="Logo" /> */}
        <p className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          RS
        </p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/razi-shaikh">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        {/* <a href="">
          <FaSquareXTwitter />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
