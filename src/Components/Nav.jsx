import React from "react";

const Nav = () => {
  return (
    <div className="h-18 flex items-center justify-between px-30">
      <div className="Logo flex items-center space-x-2 text-2xl font-bold cursor-pointer hover:scale-110 transition-transform duration-300">
        <span>Made with</span>
        <img src=".\src\assets\react.svg" alt="logo" />
      </div>
      <div className="flex space-x-6">
        <a
          href="#about"
          className="text-2xl font-bold hover:scale-110 transition-transform duration-300"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-2xl font-bold ml-4 hover:scale-110 transition-transform duration-300"
        >
          Projects
        </a>
        <a
          href="#resume"
          className="text-2xl font-bold ml-4 hover:scale-110 transition-transform duration-300"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Nav;
