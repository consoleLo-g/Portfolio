import React from "react";

const Nav = () => {
  const openResume = () => {
    window.open("/GResume3.pdf", "_blank"); // Opens the PDF in a new tab
  };
  return (
    <div className="container mx-auto w-screen px-4 py-3 sm:py-4 flex items-center justify-between">
      <div className="flex sm:mx-0 items-center justify-between w-full">
        <div className="Logo flex shrink-0 w-12 h-12 sm:w-16 sm:h-16 invert brightness-0 cursor-pointer hover:scale-110 transition-transform duration-300">
          <img
            onClick={() => window.open("https://github.com/consoleLo-g")}
            className="w-full h-auto"
            src="./github.svg"
            alt="logo"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-x-6 sm:gap-x-8">
          <a
            href="#about"
            className="sm:text-2xl font-bold hover:scale-110 transition-transform duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="sm:text-2xl font-bold hover:scale-110 transition-transform duration-300"
          >
            Projects
          </a>
          <a
            onClick={openResume}
            className="sm:text-2xl font-bold hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
