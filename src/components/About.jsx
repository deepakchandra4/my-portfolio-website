import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-xl mt-10 md:mt-20">
          As a BCA student and front-end developer, I'm skilled in designing and
          developing websites using various tools such as HTML, CSS, JavaScript,
          React, Java, Tailwind, and Bootstrap. I create user-friendly websites
          that look great and work well on different devices.
        </p>
        <br />

        <p className=" mt-2 text-xl">
          To collaborate with other developers and contribute to open-source
          projects, I also use version control systems such as Git and GitHub.
          With my knowledge and experience in these technologies, I can create
          high-quality websites that meet the requirements of clients and users.
        </p>
      </div>
    </div>
  );
};

export default About;
