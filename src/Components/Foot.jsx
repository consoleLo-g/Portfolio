import React from "react";

const Foot = () => {
  return (
    <div className="">
      <hr />
      <h1 className="my-12 font-bold cursor-default text-xl text-white">
        Contact
      </h1>
      <p className="my-9 font-extralight">
        I'm currently looking for an internship in the field of web development.
        <br />
        Please feel free to contact me.
      </p>

      <span
        onClick={() => window.open("mailto:gkgaurav343@gmail.com")}
        className="my-3 bg-[#000] cursor-pointer text-white font-extralight text-lg py-2 px-4 rounded-full hover:bg-blue-500 transition-colors duration-300"
      >
        gkgaurav343@gmail.com
      </span>
      <div className="flex justify-between items-center py-7">
        <div className="flex justify-between items-center h-8 w-8 round-full  cursor-pointer ">
          <img
            src="./linkedin-logo.svg"
            alt="logo"
            className="mx-9 h-8 w-8 invert brightness-0 hover:scale-110 transition-transform duration-300 "
            onClick={() =>
              window.open("https://www.linkedin.com/in/gaurav-kumar-997624258/")
            }
          />
          <img
            src="./Gmail-logo.svg"
            alt="logo"
            className="m-9 h-8 w-8 invert brightness-0 hover:scale-110 transition-transform duration-300 "
            onClick={() => window.open("mailto:gkgaurav343@gmail.com")}
          />
          <img
            src="./github.svg"
            alt="logo"
            className="mx-9 h-8 w-8 invert brightness-0 hover:scale-110 transition-transform duration-300 "
            onClick={() => window.open("https://github.com/consoleLo-g")}
          />
        </div>
      </div>
    </div>
  );
};

export default Foot;
