import React, { useState, useEffect } from "react";

const techStack = ["ReactJS", "Tailwind CSS", "JavaScript"];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("projects");
      if (projectSection) {
        const sectionTop = projectSection.getBoundingClientRect().top;
        const currentScrollTop = window.scrollY;

        if (sectionTop < window.innerHeight * 0.8) {
          if (currentScrollTop > lastScrollTop) {
            setIsVisible(true); // Show when scrolling down
          } else if (currentScrollTop < 200) {
            setIsVisible(false); // Hide when back to top
          }
        }

        setLastScrollTop(currentScrollTop); // Update scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div
      id="projects"
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold text-left mt-12">Projects</h1>

      {["PassGen", "PassOP"].map((project, index) => (
        <div
          key={index}
          className="text-[#74c5ee] border-slate-900 rounded-2xl m-5 bg-[#00eff] text-2xl p-5"
        >
          <h2>{project}</h2>
          <p className="text-blue-100 text-lg mt-2">
            {project === "PassGen"
              ? "PassGen is a random password generator that allows users to create secure passwords for their online accounts. "
              : "PassOP is a password manager that helps users securely store and manage their passwords. "}
            It uses ReactJS and Tailwind CSS for building a modern web
            application.
          </p>

          <div className="flex flex-row gap-5 mt-2">
            {techStack.map((tech) => (
              <button
                key={tech}
                className="text-xl bg-blue-500 text-white font-bold py-2 px-4 rounded-xl mt-2"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
