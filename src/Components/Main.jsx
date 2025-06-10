import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ text, speed = 100, reverseDelay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isReversing, setIsReversing] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (!isReversing) {
      interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          setIndex((prev) => prev + 1);
        } else {
          clearInterval(interval);
          setTimeout(() => setIsReversing(true), reverseDelay);
        }
      }, speed);
    } else {
      interval = setInterval(() => {
        if (index > 0) {
          setDisplayedText(text.slice(0, index - 1));
          setIndex((prev) => prev - 1);
        } else {
          clearInterval(interval);
          setTimeout(() => setIsReversing(false), reverseDelay);
        }
      }, speed);
    }

    return () => clearInterval(interval);
  }, [index, isReversing, text, speed, reverseDelay]);

  return <span>{displayedText}</span>;
};

const Main = () => {
  return (
    <div className="flex flex-col justify-around mt-25 lg:flex-row sm:mt-0 sm:justify-around sm:items-center h-screen w-screen">
      <div className="my-[12em] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Gaurav Kumar</h1>
          <div className="mt-4 text-lg font-bold h-8">
            <TypewriterEffect
              text="Aspiring Developer"
              speed={100}
              reverseDelay={1500}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-left my-8 text-lg max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p>
          I'm Gaurav Kumar, an aspiring Web Developer passionate about building
          modern, user-friendly web applications. Even though I'm a fresher, I
          have been actively learning and working on personal projects to
          enhance my skills in ReactJS, TailwindCSS, and JavaScript.
        </p>
        <br />
        <p>
          My journey into web development has been fueled by curiosity and a
          love for problem-solving. Through self-learning and hands-on practice,
          I've developed a strong foundation in creating responsive and
          interactive UI components.
        </p>
        <br />
        <p>
          Although I haven’t worked in the industry yet, I’ve built projects
          like PassGen (a secure password generator) and PassOP (a password
          manager), showcasing my ability to create functional web applications
          using ReactJS and TailwindCSS.
        </p>
        <br />
        <p>
          I believe every great developer starts somewhere, and I’m excited to
          contribute my skills and grow in the tech industry. Let's connect and
          build something amazing!
        </p>
      </div>
    </div>
  );
};

export default Main;
