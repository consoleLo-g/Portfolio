import React from "react";
import Button from "./Button";

const Foot = () => {
  return (
    <div className="">
      <hr />
      <h1 className="my-12 font-bold text-xl text-white">Contact</h1>
      <p className="my-9 font-extralight">
        I'm currently looking for an internship in the field of web development.
        <br />
        Please feel free to contact me.
      </p>

      <span className="my-3 bg-[]">gkgaurav343@gmail.com</span>
      <div className="flex justify-between items-center py-7">
        <Button />
      </div>
    </div>
  );
};

export default Foot;
